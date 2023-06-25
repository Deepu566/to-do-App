import React, { useContext, useState } from 'react'
import { userContext } from '../App';
import InputTask from './InputTask';


const Sidebar = () => {
    const { setRefresh, refresh, val, setVal } = useContext(userContext)
    const [searchVal, setSearchVal] = useState("")
    const [toDoInput, setToDoInput] = useState(false)
    const [newTask, setNewTask] = useState();

    const handleChange = (e) => {
        const value = e.target.value
        // let array = JSON.parse(localStorage.getItem('localTask'))
        if (value) {
            setVal([])
        }

    }


    return (
        <div className='w-1/4  border-r-2 border-black'>
            <div>
                <input onChange={handleChange} type="text" placeholder='search todo' />
            </div>
            <div>
                <button className=' bg-black text-white rounded-md  font-bold capitalize px-4 py-2 text-lg'
                    onClick={() => {
                        setToDoInput(!toDoInput)
                        setRefresh(!refresh)
                    }}>
                    {toDoInput ? "close" : "create to-do"}</button>
            </div>
            {
                toDoInput &&
                <InputTask setNewTask={setNewTask} newTask={newTask} setToDoInput={setToDoInput} />
            }
        </div>
    )
}

export default Sidebar
