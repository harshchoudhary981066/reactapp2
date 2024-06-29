import React, { Component } from 'react';

class Customer extends Component {
    constructor(){
        super();
        this.state={
            "id":10001,
            "name":"amit kumar",
            "age":20,
        }
    
    }

    customerChange = () =>{
        this.setState(
            {
                "id":10002,
                "name":"Sumit kumar",
                "age":27,
            }
        )
    }


    render(){
        return(
            <div class="flex justify-center">
            <div class="max-w-screen-md bg-slate-600 backdrop-blur-md text-white font-bold text-center w-1/2">
                <h1>Customer Component</h1>
                 <div>
                    Id is {this.state.id}
                 </div>
                 <div>
                    Name is {this.state.name}
                 </div>
                 <div>
                    Age is {this.state.age}
                 </div>

                 <div class="pt-4">
                    <button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={this.customerChange}>Change Data</button>
                 </div>
            </div>
            </div>
        )
    }
}
export default Customer;
