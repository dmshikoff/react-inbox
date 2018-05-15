import React from 'react';
import Message from './message'



const Messages = (props) => {
    const { messageData, handleSelected, handleRead, messagesRequest } = props

    let messageList = messageData.map(message => {
        return <Message key={message.id} message={message} handleSelected={handleSelected} handleRead={handleRead} messagesRequest={messagesRequest} />
    })
    return (
        <div>
            {messageList}
        </div>
    )
}

export default Messages