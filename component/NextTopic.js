import React ,{useEffect, useState}from 'react'
import archive  from '../svg/archive.svg'
import downvote from '../svg/downvotes.svg'
import upvote from '../svg/upvote.svg'


export default function NextTopics ({downvotes ,id ,title, top ,upvotes,topics, setTopic}) {
  // console.log(top);

  const [btn , setBtn] = useState([upvotes]);
  const [decreaBtn , setDecreasBtn] =useState([downvotes]); 
	const  addBtn = (e) => {
    const  Id = e.target.id;
    const findId = topics.find(data => data.id == Id);
    console.log(findId);
    let addedScore = findId.upvotes++;
    setBtn(addedScore);
   }

   const decreasVote = (e) => {
    const  Id = e.target.id;
    const findId = topics.find(data => data.id == Id);
    console.log(findId);
    let dicreaseScore = findId.downvotes--;
    setDecreasBtn(dicreaseScore);
   }
   const archiveTopic = (id) => {
    let topicToArchive = topics.find(topic => topic.id === id);
    console.log(topicToArchive);
    topicToArchive.discussedOn = Date.now();
    setTopic([...topics]);
  };
  return (
    <article>
    <button className ="archive" id={id} onClick={() => archiveTopic(id)}>
      <img src={archive}></img>
    </button>
    <h5 className ="topic-text">{title}</h5>
    <div className ="votes">
      <button className ="upvote" onClick={addBtn} id={id}><img src={upvote}/></button>
      <span className ="upvote-number">{btn}</span>
      <button className ="downvote" onClick={decreasVote}  id={id}>
        
        <img src={downvote}></img>
      </button>
      <span className ="downvote-number">{decreaBtn}</span>
    </div>
  </article>
  )
}

