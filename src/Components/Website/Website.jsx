import React, { useEffect } from 'react'
import './Website.css'

const Website = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
          window.open("https://prabhat282.github.io/resume2.0/", "_blank");
        }, 1000);
        return () => clearTimeout(timer);
      }, []);
  return (
    <div className='command-result'>
      Redirecting you to my portfolio website 
       <a href="https://prabhat282.github.io/resume2.0/">https://prabhat282.github.io/resume2.0/</a>. . .
    </div>
  )
}

export default Website
