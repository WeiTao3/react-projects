import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [showInfor, setShowInfor] = useState(false);
  return <article className="question">
    <header>
      <h4>
        {title}
      </h4>
      <button className="btn" onClick={() => {setShowInfor(!showInfor)}}>
        {showInfor ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </header>
    { showInfor ? <p>{info}</p> : <p></p>}
    {/* { showInfor && <p>{info}</p>} */}
  </article>;
};

export default Question;
