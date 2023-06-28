import React, { useContext, useState } from 'react'
import { userContext } from '../App';
import InputTask from './InputTask';


const Sidebar = () => {
    const { setRefresh, refresh, val, setVal } = useContext(userContext)
    const [searchVal, setSearchVal] = useState("")
    const [toDoInput, setToDoInput] = useState(false)
    const [newTask, setNewTask] = useState();



    return (
        <div className='max-sm:w-full max-sm:border-none  border-r-2  border-black'>
            <div className=''>
                <button className='bg-[#27374D] hover:bg-[#1f3047] text-[#9DB2BF] rounded-md  font-bold capitalize px-4 py-2 text-lg
                max-sm:w-full'
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
