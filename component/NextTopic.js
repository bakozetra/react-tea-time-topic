import React ,{useEffect, useState}from 'react'


export default function NextTopics ({downvotes ,id ,title, top ,upvotes,topics}) {
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

  return (
    <article>
    <button className ="archive" id={id}>
      {/* {archiveSVG} */}
    </button>
    <h5 className ="topic-text">{title}</h5>
    <div className ="votes">
      <button className ="upvote" onClick={addBtn} id={id}>
        {/* {upvoteSVG} */}
      </button>
      <span className ="upvote-number">{btn}</span>
      <button className ="downvote" onClick={decreasVote}  id={id}>
        {/* {downvoteSVG} */}
      </button>
      <span className ="downvote-number">{decreaBtn}</span>
    </div>
  </article>
  )
}

