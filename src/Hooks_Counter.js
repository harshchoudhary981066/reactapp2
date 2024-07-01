import React, { useState } from 'react'

export function HooksCounter() {
    
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [name, setName] = useState('Shyam Kumar');

    const nameChange = () => {
        setName('Phoolan Devi')
    }

    return (
        <div className=' grid-cols-2 h-full w-1/2 bg-cyan-400 '>
            <div>Hooks Program</div>

            <div>
            <button class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={nameChange}>Change Name  {name}</button>
            </div>

            <div>
            <button class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setName('Suresh Kumar')}>Increment {name}</button>
            </div>

            <div>
            <button class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setCount1(count1+1)}>Increment {count1}</button>
            </div>

            <div>
            <button class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setCount2(count2-1)}>Decrement {count2}</button>
            </div>
        </div>
    )
}
