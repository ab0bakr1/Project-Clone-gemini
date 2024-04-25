import React from 'react'
import { Container } from 'react-bootstrap'
import './Result.css'

const Result = ({RecentPrompt,ResultData,Loading}) => {
  return (
    <main>
        <Container>
            <div className="Result">
                <div className="ResultTitle">
                    <div className="user-img">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" className="w-100 h-100"/>
                    </div>
                    <h3 className='w-100'>{RecentPrompt}</h3>
                </div>
                <div className="ResulData">
                    <div className="DataImg">
                        <img src="https://avatars.githubusercontent.com/u/161781182?s=280&v=4" alt="user" className="w-100 h-100"/>
                    </div> 
                    {Loading ? <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div> 
                    : 
                    <p className='w-100' dangerouslySetInnerHTML={{__html:ResultData}}></p>}
                </div>
            </div>
        </Container>
    </main>
  )
}

export default Result