import React from 'react'
import Toolbar from './Toolbar'
import MarkdownIt from 'markdown-it'

function Preview({data}) {
    const md = new MarkdownIt()
    const convert = md.render(data)

    return (
        <div>
            <Toolbar name={"Previewer"} />
            <div id='preview' className='text-start p-3 ' dangerouslySetInnerHTML={{__html: convert}} />
        </div>
    )
}

export default Preview