import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../App'
import "../App.css"

const Content = () => {
    const { refresh, setRefresh, val, setVal } = useContext(userContext)
    const [isDeleted, setIsDeleted] = useState(false)
    const [searchVal, setSearchVal] = useState([])

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
    const handleChange = (e) => {
        const value = e.target.value
        val.forEach((v) => {
            const isVisible = v.taskName.includes(value)
            v.show = isVisible
        })
        let temp = val;
        setSearchVal(temp.filter(t => t.show))
    }

    return (
        <div className=' w-full px-4 py-10 flex max-sm:relative  flex-wrap gap-6 content overflow-scroll
   max-sm:bg-[#27374D] max-sm:h-full max-sm:pt-42 max-sm:rounded-xl max-sm:gap-2 max-sm:pt-16'>
            <div className='absolute max-sm:right-0 max-sm:flex max-sm:justify-end  max-sm:top-0 top-20  z-50 ' >
                <input className='rounded-lg px-3 py-2 font-bold capitalize text-md outline-2  outline-blue-500
                max-sm:w-3/6  max-sm:sticky'
                    onChange={handleChange} type="text" placeholder='search todo' />
            </div>
            {
                val?.map((task) => {
                    {
                        if (task.show)
                            return (<div key={task.id} className='group h-2/6 rounded-e-xl rounded-bl-xl px-2 overflow-hidden relative  w-[31%] border-blue-400 border-2'>
                                <h1 className='text-lg first-letter:capitalize text-[#DDE6ED] font-bold'>{task.taskName}</h1>
                                <div className='flex items-center justify-between absolute bottom-0 w-full 
                                max-sm:flex-col'>
                                    <span className='font-bold max-sm:text-white text-sm'>{task.date}</span>
                                    <span onClick={() => handleDelete(task.id)}
                                        className='bg-red-500 hover:bg-red-900 hover:px-5 cursor-pointer text-[#DDE6ED] px-3 py-1 rounded-lg font-bold
                                        max-sm:w-full '>
                                        Delete
                                    </span>
                                </div>
                            </div>)
                    }
                })
            }
        </div>
    )
}

export default Content
