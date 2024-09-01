import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error =useRouteError()
  return (
    <div>Something Went Wrong. {error.status}</div>
  )
}

export default ErrorPage