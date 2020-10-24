import React, { useState } from 'react'

export default function PastTopics({title , id , topics }) {
  let [deleteBtn , setDeletBtn] = useState('');
   const handleDelete = (e) => {
    const Id = e.target.id;
    const topicToKeep = topics.filter(data => data.id !== Id)
    console.log(topicToKeep);
    console.log(topics);
    topics = deleteBtn;
    deleteBtn = topicToKeep ;
    setDeletBtn(deleteBtn);
   };
  return (<article>
            <button class="delete" id={id} onClick={handleDelete} value={topics.id}></button>
             <h5 class="topic-text">${title}</h5>
            <p>Discussed</p>
          </article>) 
  }