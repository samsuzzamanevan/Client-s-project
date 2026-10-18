import React from 'react'
import FirstPage from './FirstPage'

function SecondPage({allQue}) {
console.log(allQue)
    
  return (
    <>
     <div>
      {
        allQue.map((items,index)=>{
          return  <h1>{items.Phone}</h1>
        })
      }
     </div>
    </>
  )
}

export default SecondPage
