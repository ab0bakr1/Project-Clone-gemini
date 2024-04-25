import React, { useContext } from 'react'
import Aside from '../Aside/Aside'
import Main from '../Main/Main'
import Search from '../Search/Search'
import Header from '../Header/Header'
import { Context } from '../../Context/Context'
import Result from '../Result/Result'


const Home = () => {
  const {Input,setInput,RecentPrompt,setRecentPrompt,PrevPrompts,setPrevPrompts,ShowResult,Loading,ResultData,OnSent} = useContext(Context)
  return (
    <section className='d-flex' data-aos="zoom-in" >
    <Aside />
    <div className="w-100 h-100 d-flex flex-column justify-content-between align-items-center" style={{"min-height":"100svh" , "backgroundColor":"#000"}}>
      <Header />
      {!ShowResult ? <Main /> : <Result RecentPrompt={RecentPrompt} ResultData={ResultData} Loading={Loading} />}
      <Search Input={Input} setInput={setInput} OnSent={OnSent}/>
    </div>
    </section>
  )
}

export default Home