import React, { useState, useEffect } from 'react'
import selection from './SortingAlgo/selection'

const Visualizer = () => {
  const [arr, setArr] = useState([49, 41, 100, 5, 43, 48, 63, 5])
  const [sorting, setSorting] = useState('')
  const clickHandler = () => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(genNumber())
    }
    setArr(newArr)
    const elements = document.querySelectorAll('.bar')
    elements.forEach((element) => {
      element.style.background =
        'linear-gradient(to top, #3766e8, rgb(165, 244, 248))'
    })
  }
  const genNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1
    return number
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let newArr = [...arr]
    for (let i = 0; i < arr.length; i++) {
      newArr = [...(await selection(newArr, i))]
      setArr(newArr)
      //await new Promise((resolve) => resolve(setArr(newArr)))
    }
  }
  return (
    <div className='visualizer'>
      <div className='btn-container'>
        <button onClick={clickHandler} className='btn'>
          Generate New Array
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type='button'
            value='Selection Sort'
            onClick={(e) => setSorting(e.target.value)}
            className={`${
              sorting === 'Selection Sort' ? 'selected' : 'not-selected'
            }`}
          />
          <input
            type='button'
            value='Bubble Sort'
            onClick={(e) => setSorting(e.target.value)}
            className={`${
              sorting === 'Bubble Sort' ? 'selected' : 'not-selected'
            }`}
          />
          <input
            type='button'
            value='Quick Sort'
            onClick={(e) => setSorting(e.target.value)}
            className={`${
              sorting === 'Quick Sort' ? 'selected' : 'not-selected'
            }`}
          />
          <button type='submit' className='btn'>
            Visualise
          </button>
        </form>
      </div>
      <div className='bar-container'>
        {arr.map((element, index) => {
          return (
            <div
              className='bar'
              key={index}
              id={index}
              style={{ height: `${element * 4}px` }}
            >
              <h3>{element}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Visualizer
//49,41,100,5,43,48,63,5
