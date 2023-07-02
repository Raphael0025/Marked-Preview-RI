import React from 'react'
import Toolbar from './Toolbar'

function Editor() {
    return (
        <div className='bg-danger p-0' id='editor'>
            <Toolbar />
            <textarea className='m-0 w-100'/>
        </div>
    )
}

export default Editor