import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, SUB } from '../redux/counterSlice'


function About() {
    const countObj = useSelector(store=>store.counterSlice.counter)

    const dispatch = useDispatch()

    // Create a function to add number
    const addNumber = ()=>{
        dispatch(ADD())
    }

    // Create a function to subtract number
    const subNumber = ()=>{
        dispatch(SUB())
    }

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-5'>
        <div className='card shadow text-center p-5'>
          <div className='card-body'>
            <h1>{countObj}</h1>
            <button className='btn btn-primary' onClick={addNumber}>ADD NUM</button>
            <button className='btn btn-danger' onClick={subNumber}>SUB NUM</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
