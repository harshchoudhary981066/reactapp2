import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerForm extends Component {
    constructor() {
        super();
        this.state = {
            "id": 1001,
            "name": "Amit Kumar",
            "salary": 35000,
            "err_id": '',
            "err_name": '',
            "err_salary": '',

        }

    }

 

    render() {
        return (
            <div>
                <form className=' border rounded-xl border-x-4 border-y-4 border-black p-5 m-5 w-1/2 bg-blue-400 text-white font-semibold'>
                    <div className='pt-4'>
                        <label>Enter ID</label>
                        <input className="form-control ml-9 border-x-2 border-y-2 border-black text-black" onChange={this.changeId}/>
                        <span>{this.state.err_id}</span>
                    </div>

                    <div className='pt-4'>
                        <label>Enter Name</label>
                        <input className="form-control ml-4 border-x-2 border-y-2 border-black text-black" onChange={this.changeName}/>
                        <span>{this.state.err_name}</span>
                    </div>

                    <div className='pt-4'>
                        <label>Enter Salary</label>
                        <input className="form-control ml-4 border-x-2 border-y-2 border-black text-black" onChange={this.changeSalary}/>
                        <span>{this.state.err_salary}</span>
                    </div>
                </form>

                <div>
                    ID is {this.state.id}
                </div>

                <div>
                    Name is {this.state.name}
                </div>

                <div>
                    Salary is {this.state.salary}
                </div>
            </div>
        );
    }
}

CustomerForm.propTypes = {

};

export default CustomerForm;