import React from 'react'
import './Default.css'
const Default = ({command}) => {
  return (
    <div className="command-result">
      <span className="command-not-found">{command}</span>
      : command not found. Type 'help' to view a list of available commands.
    </div>
  )
}

export default Default
