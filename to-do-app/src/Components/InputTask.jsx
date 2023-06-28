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
            date: newDate.slice(1, 11),
            show: true
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

        <div className='flex flex-col  bg-[#27374D] gap-3 absolute right-96 px-14 py-10 z-50 rounded-xl  border-black
        max-sm:right-0 max-sm:top-[170px]'>
            <span onClick={() => setToDoInput(false)} className='absolute right-[-10px] top-[-10px] bg-black hover:5 w-5 rounded-full text-white font-bold flex justify-center
             items-center px-2 py cursor-pointer
             max-sm:right-1'>X</span>
            <h1 className='text-3xl font-bold'>Add to-do to the list</h1>
            <input ref={ref} onChange={(e) => { setNewTask(e.target.value) }} type="text" className='px-5 py-3 first-letter:capitalize outline-none rounded-md text-black border-2px
          border-black' placeholder='write todo here' autoFocus required />
            <button onClick={handleClick}
                className=' bg-[#526D82] hover:bg-[#29618f] text-white rounded-full font-bold capitalize py-2 text-lg'>
                add Todo</button>
        </div>
    )
}

export default InputTask
