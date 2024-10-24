import React, { useState,useEffect,useRef } from 'react'
import './Terminal.css'
import Help from './Help/Help'
import OutputTemplate from './OutputTemplate'
import Default from './Default/Default'
import WhoAmI from './WhoAmI/WhoAmI'
import About from './About/About'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Website from './Website/Website'
const Terminal = () => {
  const contentRef = useRef(null);
  const InputRef = useRef(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandInput, setcommandInput] = useState("");
  const [commandOutput, setcommandOutput] = useState("");
  const [arr,setArr]=useState([])
  useEffect(()=>{
    InputRef.current.focus();
  },[])
  const scrollToBottomEnd = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  useEffect(()=>{
    scrollToBottomEnd();
  },[arr])
 
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + './Docs/resume.pdf'; 
    link.download = 'Your_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='main-container'> 
    <div className='command-output' ref={contentRef}>
      {arr}

    </div>   
    <div className='input-container'>
      <label className='input-label'>&gt;</label>
      <input ref={InputRef} type="text" className='input-command input-text' value={commandInput} onChange={(e) => {setcommandInput(e.target.value);}}
      onKeyDown={(e) => {
        if(e.key === "Enter"){
          const value=commandInput.toLowerCase().trim();
         setcommandOutput(value);
         setCommandHistory((prevHistory) => [...prevHistory, commandInput]);
      setHistoryIndex(-1);
         setcommandInput("");
         switch(value){
          case "help":
            setArr(prevArr=>[...prevArr,<OutputTemplate command={value} children={<Help/>}/>])
            break;
          case "clear":
            setArr([])
            break;
          case "whoami":
            setArr(prevArr=>[...prevArr,<OutputTemplate command={value} children={<WhoAmI/>}/>])
            break;
          case "about":
            setArr(prevArr=>[...prevArr,<OutputTemplate command={value} children={<About/>}/>])
            break;
          case "skills":
            setArr(prevArr=>[...prevArr,<OutputTemplate command={value} children={<Skills/>}/>])
            break;
          case "contact":
            setArr(prevArr=>[...prevArr,<OutputTemplate command={value} children={<Contact/>}/>])
            break;
          case "website":
            setArr(prevArr=>[...prevArr,<OutputTemplate command={value} children={<Website/>}/>])
            break;
          case "cv":
            setArr(prevArr=>[...prevArr,<OutputTemplate command={value} children={""}/>])
            downloadCV();
            break;
          default:
            setArr(prevArr=>[...prevArr,<OutputTemplate command={value} children={<Default command={commandInput}/>}/>])
            break;
         }
        }
        else if (e.key === "ArrowUp") {
          if (historyIndex < commandHistory.length - 1) {
            const newIndex = historyIndex + 1;
            setHistoryIndex(newIndex);
            setcommandInput(commandHistory[commandHistory.length - 1 - newIndex]);
          }
        } else if (e.key === "ArrowDown") {
          if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            setcommandInput(commandHistory[commandHistory.length - 1 - newIndex]);
          } else {
            setHistoryIndex(-1);
            setcommandInput("");
          }
        }
        if (e.ctrlKey && e.key === 'k') {
          e.preventDefault(); 
          setArr([]); 
        }
      }}/>
    </div>
    </div>
  )
}

export default Terminal
