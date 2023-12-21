import React from 'react'
import ChatFeed from './component/ChatFeed';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './component/LoginForm';
import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
   <ChatEngine 
    height="100vh"
    //ProjectID was gotten from ChatEngine.io
    projectID="71df57ff-8592-4b43-af21-d6c44a080e96"
    userName="King"
    //userSecret is simply the password
    userSecret="12341234"
    // userName={localStorage.getItem('username')}
    // userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed {... chatAppProps}/>}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
   />
// infinite scroll, logout, more customizations...
  )
}

export default App