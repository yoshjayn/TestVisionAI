import React, { useState } from "react";
import ChatMessage from "../Chat/ChatMessage";

export default function TestVision() {
  const [context, setContext] = useState("");
  const [screenshot, setScreenshot] = useState([]);
  const [liveMsg,setLiveMsg]=useState('');
    const [chatdata, setChatData] =useState(["Hi there"])

  const handleOnSubmit = async (event) => {
    event.preventDefault();
        setChatData([...chatdata,liveMsg]);
        setLiveMsg('')

    const formData = new FormData();
    formData.append("context", context);
    screenshot.forEach((file, index) => {
      formData.append("screenshots$(index)", file);
    });

    try {
      const response = await fetch("/api/describe-testing-instructions", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = (event) => {
    if (event.target.files) {
      setScreenshot(Array.from(event.target.files));
    }
  };

  return (
    <div className="container">
      
      <form onSubmit={handleOnSubmit}>
        <div className="context">
          <label htmlFor="context">Context:</label>
          <textarea
            id="context"
            placeholder="Enter general context"
            value={liveMsg}
            onChange={(e)=>setLiveMsg(e.target.value)}
          />
        </div>
        <div className="screenshots">
          <label htmlFor="screenshots">Upload Screenshot</label>
          <input
            type="file"
            id="screenshots"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Describe Testing Instructions</button>
      </form>

      <div>
        {chatdata.map((data,index)=>(
        <ChatMessage msg={data} key={index}/>

))}
    </div>
    </div>
  );
}
