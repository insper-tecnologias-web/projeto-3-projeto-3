import { useState, useEffect } from "react"
import axios from "axios"

const useAuth = code => {
  const [accessToken, setAccessToken] = useState()
  // const [refreshToken, setRefreshToken] = useState()
  // const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: {access_token},
        } = await axios.post(`http://localhost:3001/login`, {
          code,
        })

        setAccessToken(access_token)
        // setRefreshToken(refresh_token)
        // setExpiresIn(expires_in)
        window.history.pushState({}, null, "/")
      } catch {
        console.log("error")


      }
    })()
  }, [code])


  return accessToken
}

export default useAuth