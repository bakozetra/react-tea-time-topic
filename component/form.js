import React, { useState } from 'react'
export default function Form () {
  const [inputValue , setInputValue] = useState(' ');
  const handleSubmit = (e) => {
   e.preventDefault();
   console.log(e.target.value);
  }
  return (
    <form className="add-topic" >
      <input
        required
        type="text"
        value ={inputValue}
        onChange = {((e) => setInputValue(e.target.value))}
        placeholder="Type your topic idea here"
      />
      <button type="submit" value={inputValue} onClick={handleSubmit} >Submit</button>
    </form>
  )
}
