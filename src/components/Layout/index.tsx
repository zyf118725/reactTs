import React from 'react'
import Header from '../Header'
import './index.less'
function Layout(props:any) {
  return (
    <div className='layoutw'>
      <Header />
      <div className='laycon'>
        {props.children}
      </div>
    </div>
  )
}

export default Layout