import React, { useEffect, useState } from 'react'
import PasTopics from './PastTopic'
import NextTopic from './NextTopic'

const API_URL = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"
export default function Topics () {
  let [topics , setTopic] = useState([]);
  let [addTopic , setAddTopic] = useState([]);
  let [deleteBtn , setDeletBtn] = useState([]);
  const fetchTopic = async () => { 
    try {
     const res = await fetch(API_URL);
     const data = await res.json(); 
     setTopic(data);
    } catch(e) {
    console.error(e)
    }
  }
 
  useEffect(() => {
    fetchTopic()
  } , [])

  useEffect (() => {
    setAddTopic(topics.filter( topic => !topic.discussedOn));
  } , [topics])
  
  useEffect(() => {
    setDeletBtn(topics.filter(topic => topic.discussedOn))
  } ,[topics])

  const handleDelete = (e) => {
   const Id = e.target.value;
   console.log(Id)
   console.log('frrrr');
   setDeletBtn(deleteBtn.filter(data => data.id !== Id));
  };
 
return (
     <>
     <h2>Next topic</h2>
       {addTopic.map( top => {
         return <NextTopic key={top.id} {...top}  addTopic ={addTopic}/>
       })}
       <h2>Past topic</h2>
         {deleteBtn.map( top => {
         return <PasTopics key={top.id} {...top}  top ={top} handleDelete={handleDelete} />
       })}
     </>
  )
}