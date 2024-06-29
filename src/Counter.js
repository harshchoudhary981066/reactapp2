import React, { Component } from 'react';

class componentName extends Component {
    constructor(){
        super()
        this.state={
            "c": 1
        }
    }

    hello1 = () => {
        this.setState({
            "c": this.state.c+1
        })
    }

    hello2 = () => {
        this.setState({
            "c": this.state.c-1
        })
    }
    render() {
        return (
            <div className='flex justify-center'>
            <div className='w-1/2'>
            <div>
                <h1>Counter Application</h1>
            </div>
            <div>
                <button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={this.hello1}>Increment</button> {this.state.c}
            </div>

            <div type="button" onClick={this.hello2} >
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Decrement</button> {this.state.c}
            </div>
            </div>
            </div>
        );
    }
}


export default componentName;