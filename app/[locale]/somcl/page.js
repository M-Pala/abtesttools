'use client'
import HeaderContext from '@/context/headerContext'
import React, { useContext } from 'react'
import { IfFeatureEnabled } from "@growthbook/growthbook-react";

const Somcl = () => {
    // const {isSticky} = useContext(HeaderContext)
  return (
    <div>
        <h1>This is some page</h1>
        <p>This is some description</p>
        <IfFeatureEnabled feature="welcome-banner-01">
            <p>This is flag condition</p>
        </IfFeatureEnabled>
        {/* {isSticky && <p>
            it is sticky    
        </p>} */}
    </div>
  )
}

export default Somcl