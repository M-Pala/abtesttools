'use client'

import { useEffect, useRef, useState } from "react";

// import { getSession, setSession } from "./session";
import HeaderContext from "@/context/headerContext";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { usePathname } from "next/navigation";
import { getSession, setSession } from "./sessions";

const FEATURES_ENDPOINT = "https://cdn.growthbook.io/api/features/sdk-iIVUBuxMKHASTaOM";
const growthbook = new GrowthBook({
    trackingCallback: (experiment, result) => {
      console.log("Viewed Experiment", experiment, result);
    },
  });



const ContextWrapper = ({ children, clientIp }) => {
    const [isSticky, setIsSticky] = useState(false); // the state for the header sticky header
    const [userLoc, setUserLoc] = useState('US')
    const pathname = usePathname()
    const getUserId = async () => {
        // return String(Math.floor(Math.random()*10000000)) + '-v1'
        if(getSession('abUserID')){
            console.log('avl');
            return getSession('abUserID')
        }
        else{
            let newAbUserId = String(Math.floor(Math.random()*10000000)) + '-v1'
            setSession('abUserID', newAbUserId)
            return newAbUserId
        }
    }
    useEffect(() => {
        const setupGW = async () => {
            fetch(FEATURES_ENDPOINT)
              .then((res) => res.json())
              .then((json) => {
                growthbook.setFeatures(json.features);
              });
        
    
            growthbook.setAttributes({
              id: await getUserId(),
            });
        } 
        setupGW()
      }, [pathname]);

      useEffect(()=>{
        const getCont = async () => {
          const res = await fetch(`https://freeipapi.com/api/json/${clientIp}`)
          const resData = await res.json()
          console.log('here');
          if(resData.countryCode){
            if(resData.countryCode.length>0){
              setUserLoc(resData.countryCode)
            }
            else{
              setUserLoc('US')
            }
          }
          else{
            setUserLoc('US')
          }
        }
        getCont()
      },[clientIp])

    return (
        <HeaderContext.Provider
            value={{
                isSticky, setIsSticky,
                userLoc,
            }}
        >
            <GrowthBookProvider growthbook={growthbook}>
                {children}
            </GrowthBookProvider>
        </HeaderContext.Provider>
    )
}

export default ContextWrapper;