import React, { useEffect, useState } from 'react'
import Article from './article'
const API_URL = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"
export default function Topics () {
  const [topics , setTopic] = useState([]);
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
  return (
     <>
     {topics.map(topic => {
       return (
         <Article key={topic.id} {...topic} />
       )
     })}
     </>
  )
}