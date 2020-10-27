import React, { useState } from 'react'
export default function Form ({topics ,setTopic}) {
  console.log(topics);
  const [inputValue , setInputValue] = useState(' ');
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTopic = createNewTopic(e.target.value);
    console.log(newTopic);
    topics.push(newTopic);
    setTopic([...topics]) 
  }

  const createNewTopic = title => {
    return {
      upvotes: 0,
      downvotes: 0,
      disussedOn: '',
      title: title,
      id: Date.now(),
    };
  };

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
