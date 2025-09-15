import { useRouteError } from "react-router"
const Error = () => {
    const error=useRouteError();
    console.log(error)
  return (
      <div className="body-container">
       <h1> Oops! Something went wrong</h1>
       <h2>{error.error.message}</h2>
       <h2>{error.status} - {error.statusText}</h2>
    </div>
  )
}

export default Error