import React from 'react'
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const TodoItems = ({title , id , isComplete , deleteTodo , toggle}) => {
  return (
    <div className='flex bg-gray-400 p-3 rounded-full text-white  justify-between items-center my-3 gap-2'>
      <div onClick={() =>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        {/* <MdCheckCircle   className='w-7 text-white-600'/> */}

        {
          isComplete ? <MdCheckCircle className='w-7 text-white-600' /> : <MdRadioButtonUnchecked className='w-7 text-white-600' />
        }
        <p className={`text-white  capitalize font-semibold ml-4 text-[18px] ${isComplete ? "line-through" : ""} `}  >{title}</p>
      </div>

      <MdDelete onClick={() => {deleteTodo(id)}}    className='text-orange-600' />
    </div>
  )
}

export default TodoItems