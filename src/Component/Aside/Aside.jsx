import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faBars, faGear, faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Aside.css'
import React, { useState } from 'react'

const Aside = () => {
    const [open, setOpen] = useState(false)
    const [ShowP , setShowP] = useState("none")
    const [Width , setWidth] = useState("60px")
    function openAside(){
        if(open){
            setOpen(false)
            setShowP("none")
            setWidth("60px")
        }else{
            setOpen(true)
            setShowP("block")
            setWidth("150px")
        }
    }
  return (
    <aside style={{width: Width}}>
        <div className="top">
            <button onClick={openAside}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="d-flex">
                <FontAwesomeIcon icon={faPlus} />
                <p style={{display: ShowP}}>Add New</p>
            </div>
            <h6>Recent</h6>
        </div>
        <div className="bottom">
            <div className="d-flex">
                <FontAwesomeIcon icon={faQuestion} />
                <p style={{display: ShowP}}>Help</p>
            </div>
            <div className="d-flex">
                <FontAwesomeIcon icon={faClock} />
                <p style={{display: ShowP}}>Help</p>
            </div>
            <div className="d-flex">
                <FontAwesomeIcon icon={faGear} />
                <p style={{display: ShowP}}>Help</p>
            </div>
        </div>
    </aside>
  )
}

export default Aside