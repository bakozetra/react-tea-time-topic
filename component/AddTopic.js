import React, {useState} from 'react'
import Form from './form'
export default function AddTopic () { 
  return (
    <Form onSubmit={handleSubmit}/>
  )
}