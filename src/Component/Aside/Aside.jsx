import { faClock, faFolder } from '@fortawesome/free-regular-svg-icons'
import { faBars, faGear, faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Aside.css'
import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'


const Aside = () => {
    const {OnSent,PrevPrompts,setRecentPrompt,NewChat} = useContext(Context)
    const LoadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await OnSent(prompt)
    }
    const [open, setOpen] = useState(false)
    const [ShowP , setShowP] = useState("none")
    const [ShowD , setShowD] = useState("none")
    const [Width , setWidth] = useState("60px")
    function openAside(){
        if(open){
            setOpen(false)
            setShowP("none")
            setShowD("none")
            setWidth("60px")
        }else{
            setOpen(true)
            setShowP("block")
            setShowD("flex")
            setWidth("150px")
        }
    }
  return (
    <aside className='d-md-flex d-none' style={{width: Width}}>
        <div className="top">
            <button onClick={openAside}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div onClick={()=>NewChat()} className="d-flex">
                <FontAwesomeIcon icon={faPlus} />
                <p style={{display: ShowP}}>Add New</p>
            </div>
            <h6 style={{display: ShowP}}>Recent...</h6>
            {PrevPrompts.map((item,index)=>(
                <div data-aos="fade-right" onClick={()=>LoadPrompt(item)} className="align-items-center gap-2 py-1 px-2" style={{display: ShowD}} key={index}>
                    <FontAwesomeIcon icon={faFolder} />
                    <h6>{item.slice(0,7)}...</h6>
                </div>
                
            ))}
        </div>
        <div className="bottom">
            <div className="d-flex">
                <FontAwesomeIcon icon={faQuestion} />
                <p style={{display: ShowP}}>Help</p>
            </div>
            <div className="d-flex">
                <FontAwesomeIcon icon={faClock} />
                <p style={{display: ShowP}}>Activity</p>
            </div>
            <div className="d-flex">
                <FontAwesomeIcon icon={faGear} />
                <p style={{display: ShowP}}>Settings</p>
            </div>
        </div>
    </aside>
  )
}

export default Aside