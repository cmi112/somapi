import React from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from "react-bootstrap"
import "../App.css"

function PostWords() {
  const submit=async(event)=>{
    event.preventDefault()
    const name=event.target.name.value
    const meaning=event.target.meaning.value
    const explanition=event.target.explanition.value
    const englishWord=event.target.englishWord.value
    const wordData={
      name,
      meaning,
      explanition,
      englishWord

    }
    console.log(wordData);
    await axios.post("http://localhost:5000/words",wordData)
    window.location.replace("/wordlist")
  }
  return (
    <Form onSubmit={submit} className="form">
      <h1>Somali Words collecting</h1>
      <Form.Group className="mb-3" >
      <Form.Label>English Word</Form.Label>
      <Form.Control type="text" placeholder="English meaning" name="englishWord" />
      
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Somali word</Form.Label>
      <Form.Control type="text" placeholder="Gali halkan ereyga" name="name" />
      
    </Form.Group>
  
    <Form.Group className="mb-3" >
      <Form.Label>Meaning</Form.Label>
      <Form.Control type="text" placeholder="Gali halkan macnaha" name="meaning"/>
      
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Explanition</Form.Label>
      <Form.Control type="text" placeholder="Faahfaahin" name="explanition"/>
      
    </Form.Group>
    
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default PostWords
