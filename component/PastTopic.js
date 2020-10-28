import React, { useState } from 'react'

export default function PastTopics({title, top , setPastTopic, pastTopic, id , topics }) {
   const handleDelete = (e) => {
    const Id = top.id;
    setPastTopic(pastTopic.filter(topic => topic.id !== Id))
   };
   const discussedOnDate = new Date(Number(top.discussedOn));
  return (<article>
            <button className="delete" id={id} onClick={handleDelete} value={top.id}>Delete</button>
             <h5 className="topic-text">{title}</h5>
            <p>Discussed on {discussedOnDate.toLocaleDateString()}</p>
          </article>) 
        }