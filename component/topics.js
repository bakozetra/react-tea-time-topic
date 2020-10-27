import React, { useEffect, useState } from 'react'
import PasTopics from './PastTopic'
import NextTopic from './NextTopic'
import './style.css'
import AddTopics from './AddTopic'

const API_URL = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"
export default function Topics (props) {
  let [topics , setTopic] = useState([]);
  let [pastTopic , setPastTopic] = useState([]);
  const fetchTopic = async () => { 
    try {
     const res = await fetch(API_URL);
     const data = await res.json(); 
     setTopic(data);
     console.log(data);
    } catch(e) {
    console.error(e)
    }
  }
 
  useEffect(() => {
    fetchTopic()
  } , [])
  
  useEffect (() => {
     setPastTopic()
  }, [topics])

  useEffect (() => {
    setPastTopic(topics.filter( topic => topic.discussedOn))
  }, [topics])

return (
     <>
      <AddTopics  topics={topics} setTopic={setTopic} />
     <h2>Next topic</h2>
       {topics.filter(topic => !topic.discussedOn).map( top => {
         return <NextTopic key={top.id} {...top} top={top} topics={topics} discussedOn={top.discussedOn} setTopic={setTopic}/>
       })}
       <h2>Past topic</h2>
         {pastTopic.map( top => {
         return <PasTopics key={top.id} {...top} top={top} setPastTopic={setPastTopic} pastTopic={pastTopic} topics={topics}  discussedOn={top.discussedOn} setTopic={setTopic}/>
       })}
     </>
  )
}