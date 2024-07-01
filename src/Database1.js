import React, { Component, PropTypes } from 'react';

export default class Database1 extends Component {
 constructor(){
        super();
        this.state = {
            data: []
    }
 }

    componentDidMount() {
        fetch("http://localhost:3000/allPerson").then(result => {
            this.setState({
                data: result
            })
        })
    }
    render() {
        return (
            <>
            <h1>Person Datat</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
                {
                this.state.data.map(
                    a => 
                    <tr>
                        <td>{a.personId}</td>
                        <td>{a.personName}</td>
                        <td>{a.personSalary}</td>
                    </tr>
                )
            }
            </table>
            </>
        )
    }
}