import React from 'react'

const Container = (props) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Container