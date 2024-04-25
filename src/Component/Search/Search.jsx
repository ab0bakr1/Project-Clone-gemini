import { faImage, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from 'react-bootstrap'
import "./Search.css"

const Search = ({Input,setInput,OnSent}) => {
  return (
    <section className="Search text-center p-3">
        <Container>
            <div className="search-item">
                <input onChange={(e)=>setInput(e.target.value)} value={Input} type="text" placeholder="Enter a prompt here" />
                <div className="d-flex align-items-center gap-4">
                  <FontAwesomeIcon icon={faImage} />
                  <FontAwesomeIcon icon={faMicrophone} />
                  {Input? <FontAwesomeIcon icon={faPaperPlane} onClick={()=>OnSent() && setInput("")}/> : null}          
                </div>
            </div>
            <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </Container>
    </section>
  )
}

export default Search