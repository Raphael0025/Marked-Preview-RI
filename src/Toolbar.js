import React from 'react'
import {FaFreeCodeCamp } from 'react-icons/fa';
import { FiMinimize2 } from 'react-icons/fi';
import { BsArrowsFullscreen } from 'react-icons/bs';

function Toolbar({name}) {
    return (
        <div id='toolbar' className='w-100 p-1 ' >
            <div><FaFreeCodeCamp className='fa' />{name}</div>
            <button className='m-0 me-2 p-0 btn btn-outline-black'><BsArrowsFullscreen /></button>
        </div>
    )
}

export default Toolbar