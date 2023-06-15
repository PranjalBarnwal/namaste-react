import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
  const {status,statusText,data}=useRouteError();
  return (
    <div>
      <h1>{status}</h1>
      <h2>{statusText}</h2>
      <h3>{data}</h3>
      
    </div>
  )
}

export default Error
