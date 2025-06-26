import React from 'react'

const UserDeatails = ({userdata, marriedDetails}) => {
  return (
    <div>
        <h2>my name is{userdata.name} </h2>
        <h2>i am {userdata.age} </h2>
        <h2>i am from {userdata.address} </h2>
        const [count,setcount]=useState(0)

        {
        marriedDetails.map((item,index)=>(
            <div key={index}>
                {Object.entries(item).map(([key,value])=>(
                    <p key={key} >{key}:{value}</p>
                ))}
                <h2>{count}</h2>
                <button onClicl={()=>setCount(count+1)}>increment</button>
            </div>
        ))
    
    }
    </div>
    
  )
}

export default UserDeatails