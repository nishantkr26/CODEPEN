import { useEffect, useState } from 'react'
import './App.css'
import Editor from './Editor'
import useLocalStorage from './hooks/useLocalStorage'

function App() {

  const [html,setHtml] = useLocalStorage('html','')
  const [css,setCss] = useLocalStorage('css','')
  const [javascript,setJavascript] = useLocalStorage('javascript','')
  const [srcDoc,setSrcDoc]=useState("");

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(`
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${javascript}</script>
    </html>
  `)
    },250)

    return ()=> clearTimeout(timeout)
  },[html,css,javascript])

  return (
    <>
    <div className="pane top-pane"> 
      <Editor language="xml" displayName="HTML"
      value={html} onChange={setHtml}></Editor>
      <Editor language="css" displayName="CSS"
      value={css} onChange={setCss}></Editor>
      <Editor language="javascript" displayName="JS"
      value={javascript} onChange={setJavascript}></Editor>
    </div>
    <div className='pane'>
      <iframe srcDoc={srcDoc} title='output' sandbox='allow-scripts'
      width={"100%"} height={"100%"}></iframe>
    </div>
    </>
  )
}

export default App

