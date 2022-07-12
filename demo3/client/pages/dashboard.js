import React from 'react'
import Dashboard from '../components/Dashboard'

const dashboard = () => {

  const onClick = (e) =>{
    e.preventDefault()

  }
  return (
    <div>
        <Dashboard onClick={onClick}/>
    </div>
  )
}

export default dashboard