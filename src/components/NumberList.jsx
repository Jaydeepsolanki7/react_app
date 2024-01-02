import React from 'react'

function NumberList() {
  const numbers = [1,2,3,4,5]
  const listItem = numbers.map((number)=>{
    <li>{number}</li>
  })
  return (
    <div>
      <ul>{listItem}</ul>
    </div>
  )
}

export default NumberList
