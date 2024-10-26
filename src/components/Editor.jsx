/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';



export default function Editor(props) {
    
    const [open,setOpen] = useState(true)

    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor,data,value){
        onChange(value)
    }


  return (
        <div className={`editor-container ${open ? ``  :  `collapsed`}`}>
        <div className='editor-title'>
            {displayName}
            <button type="button" className="expand-collapse-btn" onClick={()=> setOpen(prevOpen => !prevOpen)}><FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt}></FontAwesomeIcon></button>
        </div>
        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
            lineWrapping:true,
            lint:true,
            mode:language,
            theme:'material',
            lineNumbers:true
        }}
        />
    </div>
    
  )
}
