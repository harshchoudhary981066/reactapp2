import React from 'react'

export function HooksForm(props) {
    

    return (
        <>
        <div>
            <h2>ADDRESS</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Location</th>
                    <th>City</th>
                </tr>
            </table>
            {
            props.addr.map(
                a => 
                <tr>
                <td>{a.addr_id}</td>
                <td>{a.location}</td>
                <td>{a.city}</td>
                </tr>
            )
        }
        </div>
        </>
    )
}
