import React from 'react'
import UserDeatails from './UserDeatails'

const ParentUserDetails = () => {

    const user = {
        name : "yogesh",
        age : 22,
        address : "bharatpur-11"

    }

    const abc = [{
        marriedIn : "ktm",
        marriedTo : "Ram"

    },

    {
        nowLivingIn: "Aus",
        with: ":HerBrother"
    },

    ]

  return (
    <div>
        <UserDeatails userdata ={user}  marriedDetails ={abc} />
    </div>
  )
}

export default ParentUserDetails