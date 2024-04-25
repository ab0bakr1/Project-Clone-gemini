import { createContext, useState } from "react";
import runChat from "../Config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [Input , setInput] = useState("")
    const [RecentPrompt , setRecentPrompt ] = useState("")
    const [PrevPrompts , setPrevPrompts ] = useState([])
    const [ShowResult , setShowResult  ] = useState(false)
    const [Loading , setLoading  ] = useState(false)
    const [ResultData , setResultData  ] = useState("")

    const DelayPara = (index,nextWord) =>{
        setTimeout(() => {
            setResultData(Prev=>Prev+nextWord)
        }, 75 * index);
    }
    const NewChat = () =>{
        setShowResult(false)
        setLoading(false)
    }
    

    
    const OnSent = async (prompt) =>{
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response 
        if(prompt !== undefined){
            response = await runChat(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(Prev => [...Prev,Input])
            setRecentPrompt(Input)
            response = await runChat(Input)
        }
        let responseArray = response.split("**")
        let newResponse ;
        for(let i = 0 ; i < responseArray.length ; i++)
        {
            if(i===0 || i%2 !== 1){
                newResponse += responseArray[i]
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ")
        for(let i = 0 ; i < newResponseArray.length ; i++){
            const nextWord = newResponseArray[i];
            DelayPara(i,nextWord+" ");
        }
        setLoading(false)
    }
    const ContextValue = {
        Input,
        setInput,
        RecentPrompt,
        setRecentPrompt,
        PrevPrompts,
        setPrevPrompts,
        ShowResult,
        Loading,
        ResultData,
        OnSent,
        NewChat
    }
    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
};

export default ContextProvider