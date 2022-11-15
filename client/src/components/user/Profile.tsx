import React from 'react'
import useRefreshToken from '../../hooks/useRefreshToken'
const Profile = () => {
  const refresh = useRefreshToken()
  return (
    <div><h1>profile</h1>
    <button onClick={()=> refresh()}>test</button>
    </div>
  )
}

export default Profile