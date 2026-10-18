import React from 'react'

function Inputs({type,name,className,placeholder,onChange,value}) {
  return (
    <>
      <input type={type}  name={name} className = {`w-[500px] border-black border-[1px]  rounded-[8px] p-[12px] ${className}`} placeholder={placeholder} onChange ={onChange} value={value}/>
    </>
  )
}

export default Inputs
