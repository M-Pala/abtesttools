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



const ContextWrapper = ({ children }) => {
    const [isSticky, setIsSticky] = useState(false); // the state for the header sticky header
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


    return (
        <HeaderContext.Provider
            value={{
                isSticky, setIsSticky,
            }}
        >
            <GrowthBookProvider growthbook={growthbook}>
                {children}
            </GrowthBookProvider>
        </HeaderContext.Provider>
    )
}

export default ContextWrapper;