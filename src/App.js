import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import { ChatFeed } from './component/ChatFeed'
import './App.css';

const App = () => {
  return (
   <ChatEngine 
    height="100vh"
    //ProjectID was gotten from ChatEngine.io
    projectID="71df57ff-8592-4b43-af21-d6c44a080e96"
    userName="King"
    //userSecret is simply the password
    userSecret="12341234"
    renderChatFeed={(chatAppProps)=><ChatFeed {... chatAppProps}/>}
   />
  )
}

export default App