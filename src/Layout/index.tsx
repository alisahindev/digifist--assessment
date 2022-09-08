import React from 'react'
import Left from './Left'
import Right from './Right'

const Layout = (children: any) => {
    return (
        <div className='main'>
            <Left />
            <Right />
        </div>
    )
}

export default Layout