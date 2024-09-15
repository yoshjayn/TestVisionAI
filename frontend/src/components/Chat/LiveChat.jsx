import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
function LiveChat() {

    const [liveMsg,setLiveMsg]=useState('');
    const [chatdata, setChatData] =useState(["Hi there"])
    
  

  return (
    <>
    <div>
        {chatdata.map((data,index)=>(
        <ChatMessage msg={data} key={index}/>

))}
    </div>
    <form 
    onSubmit={(e)=>{
        e.preventDefault();
        setChatData([...chatdata,liveMsg]);
        // chatdata.push(e.target.value);
        setLiveMsg('')
    }}>
        <input 
        type="text" value={liveMsg}
        onChange={(e)=>setLiveMsg(e.target.value)}/>
        <button 
        >send</button>
    </form>
    </>
  );
}
export default LiveChat;