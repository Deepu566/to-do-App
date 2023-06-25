import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../App'
// import { UserContext } from '../App'

const Content = () => {
    const { refresh, setRefresh, val, setVal } = useContext(userContext)
    const [isDeleted, setIsDeleted] = useState(false)
    // const [val, setVal] = useState([])

    useEffect(() => {
        getItem()
    }, [refresh])

    const getItem = () => {
        setVal(JSON.parse(localStorage.getItem('localTask')))
    }

    const handleDelete = (index) => {
        getItem()
        val.splice(index - 1, 1);
        let i = 0;
        val.forEach((v) => {
            v.id = i + 1;
            i++;
        })
        localStorage.setItem('localTask', JSON.stringify(val))
        setRefresh(!refresh)
    }
    return (
        <div className=' w-full mx-4 py-5 flex relative flex-wrap gap-6 overflow-scroll'>
            {
                val?.map((task) => (
                    <div key={task.id} className='group h-2/6 rounded-e-xl rounded-bl-xl px-2 relative  w-[31%] border-black border-2'>
                        <h1 className='text-2xl font-bold'>{task.taskName}</h1>
                        <div className='font-bold absolute z-[-1] group-hover:z-10  right-0 top-[-25px]
                 cursor-pointer bg-yellow-300 inline px-4 py-2 rounded-se-md rounded-ss-md '>
                            Completed</div>
                        <span onClick={() => { setRefresh(!refresh) }} className='px-2 py cursor-pointer text-white font-bold rounded-ss-lg rounded-ee-xl absolute bottom-0 right-0 bg-red-500'>edit</span>
                        <span>{task.date}</span>
                        <span onClick={() => handleDelete(task.id)} className='bg-black cursor-pointer text-white px-3 py-1 rounded-lg font-bold'>Delete</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Content
