import { getElementError } from '@testing-library/react'
import React from 'react'
const changeBg = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve('linear-gradient(to top, #3766e8, rgb(165, 244, 248))')
    }, 500)
  )
}
const getEl = (j) => {
  return new Promise((resolve, reject) => {
    const element = document.getElementById(j)
    resolve(element)
  })
}
const selection = async (newArr, i) => {
  const element = await getEl(i)
  element.style.background = 'red'
  for (let j = i + 1; j < newArr.length; j++) {
    const element = await getEl(j)
    element.style.background = 'red'
    if (newArr[i] > newArr[j]) {
      const temp = newArr[i]
      newArr[i] = newArr[j]
      newArr[j] = temp
    }
    const bg = await changeBg()
    element.style.background = bg
  }
  element.style.background = 'yellowgreen'
  return newArr
}
export default selection
