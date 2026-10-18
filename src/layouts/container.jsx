import React from 'react'

function Container({children,className}) {
  return (
    <>
      <div className={`w-[1170px] mx-auto mt-[20px] ${className}`}>
            {children}
      </div>
    </>
  )
}

export default Container
