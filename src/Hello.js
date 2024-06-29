import React from 'react'

export function Hello(props) {
    

    return (
        <div>
            <div><h1>Hello World</h1></div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.salary}</p>
            <p>{user.dob}</p>
        </div>
       
    )
}

const user={
    "id":1001,
    "name":"Suresh Kumar",
    "salary": 90000,
    "dob": "11-12-2022"
}
