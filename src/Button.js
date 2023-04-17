import React, { useState } from 'react';
import App from './App'

export default function ShowOffButton() {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
    
  };

  return (

    <body >
    <div className='button-section0' >
     <a  href="#body"> <button className='button-show-hide' onClick={handleClick}>Show / Hide Content</button></a>
      {showContent &&<div id="href"  className='transitio-div' > < App /></div>}
    </div></body>
  );
};