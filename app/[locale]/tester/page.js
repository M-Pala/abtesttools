import React from 'react'
import { cookies, headers } from "next/headers"

const page = () => {
  // const cookieStore = cookies()
  // const theme = cookieStore.getAll()
  // console.log(theme);
  const ip = headers().get("x-forwarded-for");
  console.log('ip : ', ip);
  return (
    <>
      <div>page</div>
      <p>{` ${ip}` || " Not found"}</p>
    </>
  )
}

export default page