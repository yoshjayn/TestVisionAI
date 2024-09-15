import React from 'react'

const ChatMessage = ({name,msg}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img
          className="h-5"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span key={1} 
        >{name}</span>
        <span key={2}> {msg}</span>
    </div>
  )
}

export default ChatMessage