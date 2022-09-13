import React from 'react'
import Header from '../Header'
function Layout(props:any) {
  return (
    <div className='layoutw'>
      <Header />
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout