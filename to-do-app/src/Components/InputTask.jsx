import React, { useContext, useRef } from 'react'
import { userContext } from '../App'

const InputTask = ({ setNewTask, newTask, setToDoInput }) => {
    const ref = useRef(null)
    const { setRefresh, refresh } = useContext(userContext)
    const handleClick = () => {
        let toDoList = JSON.parse(localStorage.getItem('localTask') || "[]")
        let date = new Date()
        let newDate = JSON.stringify(date)
        const todoObj = {
            id: toDoList.length + 1,
            taskName: newTask,
            completed: false,
            date: newDate.slice(1, 11)
        }
        toDoList.push(todoObj)
        if (newTask !== undefined) {
            localStorage.setItem('localTask', JSON.stringify(toDoList))
            setRefresh(!refresh)
            setToDoInput(false)

        } else {
            alert("write a task to add to the")
        }
        setNewTask(undefined)
    }
    return (
        <div className='flex flex-col  bg-red-700 gap-3 absolute right-96 px-14 py-10 z-50 border-2  border-black'>

            <h1 className='text-3xl font-bold text-blue-800'>Add to-do to the list</h1>
            <input ref={ref} onChange={(e) => { setNewTask(e.target.value) }} type="text" className='px-5 py-3 outline-none rounded-md text-black border-2px
          border-black' placeholder='write todo here' autoFocus required />
            <button onClick={handleClick}
                className=' bg-black text-white rounded-full font-bold capitalize py-2 text-lg'>
                add Todo</button>
        </div>
    )
}

export default InputTask
