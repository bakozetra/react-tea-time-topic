import React, {useState} from 'react'
import Form from './form'
export default function AddTopic ({top , topics , setTopic}) { 
  return (
    <Form   top={top} topics={topics} setTopic={setTopic}/>
  )
}