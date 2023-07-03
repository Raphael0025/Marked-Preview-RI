import React, {useState} from 'react'
import {FaFreeCodeCamp } from 'react-icons/fa';
import { FiMinimize2 } from 'react-icons/fi';
import { BsArrowsFullscreen } from 'react-icons/bs';

function Toolbar({name}) {
    const [isClicked, setClicked] = useState(false);
    
    const handleButton = () => {
        const handlePreviewSize = () => {
            const s = document.getElementById('editor');
            const hasClass = s.classList.contains('d-none');

            (hasClass) ? s.classList.remove('d-none') : s.classList.add('d-none')
        };
        const handleEditorSize = () => {
            const e = document.getElementById('container')
            const p = document.getElementById('prev')
            const txtA = document.getElementById('textA')
            const edit = document.getElementById('editor')
            const hasClass = p.classList.contains('d-none')
            const hc = e.classList.contains('App_height')
            const hasElement = p.classList.contains('element_height')
            
            hasClass ? p.classList.remove('d-none') : p.classList.add('d-none')
            hc ? e.classList.remove('App_height') : e.classList.add('App_height')
            if(hasElement){
                txtA.classList.remove('element_height')
                edit.classList.remove('element_height')
            } else {
                txtA.classList.add('element_height')
                edit.classList.add('element_height')
            }
        }
        switch (name) {
            case 'Editor':
                setClicked(!isClicked)
                handleEditorSize()
                break
            case 'Previewer':
                setClicked(!isClicked)
                handlePreviewSize()
                break
            default:
                break
        }
    };

    return (
        <div id='toolbar' className='w-100 p-1 ' >
            <div><FaFreeCodeCamp className='fa' />{name}</div>
            <button onClick={handleButton} className='m-0 me-2 p-0 btn btn-outline-black'>
                {
                    isClicked ? <FiMinimize2 /> :  <BsArrowsFullscreen /> 
                }
            </button>
        </div>
    )
}

export default Toolbar