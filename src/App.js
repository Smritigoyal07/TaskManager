import React, { useContext } from "react"
import Login from "./Login"
import Home from "./Home"
import AuthContext from "./auth-context"

function App() {

  const ctx = useContext(AuthContext)
  console.log(ctx)

  return (
    <>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
    </>
  )
}

export default App;