import React from 'react'

export const Header = () => {
    return (
        <header style={{ backgroundColor: '#424242', color: '#fff' }}>
            <div className="container pt-1 pb-1 d-flex justify-content-between align-items-center">
                <h1>admin</h1>
                <button className='btn btn-primary ml-auto'>Logout</button>
            </div>


        </header>
    )
}
