import React from 'react'

const MyMessage = ({message}) => {
    //Overall this helps to render images. If our message is an image
    //Here I am simply checking if the message sent is either a text or an image
    if(message?.attachments?.length > 0){
            <img 
            //This is simply where the image is gotten from
            src={message.attachments[0].file}
            //This is simply just a message attachment
            alt='message-attcahment'
            className='meassage-image'
            style={{float:'right'}}
            />
    }
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
    {message.text}
  </div>
  )
}

export default MyMessage;
