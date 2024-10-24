import React from 'react'
import './Terminal.css'

const OutputTemplate = ({command,children}) => {
  return (
    <div>
      <div className="input-container">
        <span className='input-label'>&gt;</span>
        <span className='input-command'>{command}</span>
      </div>
        {children}
    </div>
  )
}

export default OutputTemplate
