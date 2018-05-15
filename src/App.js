import React, { Component } from 'react';
// import messages from './seeds.json';
import axios from 'axios'
import Toolbar from './components/toolbar';
import Messages from './components/Messages';





class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        messages: []
    }
}

getMessages() {
  axios.get('http://localhost:8082/api/messages')
  .then(data => {
    this.setState({messages: data.data})
  })
}

componentDidMount(){
  this.getMessages()
}

handleSelected = (id, selected) => {
  const newmessages = this.state.messages.map(ele => ele.id === id ? {...ele, selected} : {...ele})

  this.setState( { messages: newmessages })
  
}

handleStarred =(id) => {
  const newmessages = this.state.messages.map(ele => ele.id === id ? {...ele, starred: !ele.starred} : {...ele})

  this.setState( { messages: newmessages })

}

handleRead=(id) => {
  const newmessages = this.state.messages.map(ele => ele.id === id ? {...ele, read: true} : {...ele})

  this.setState( { messages: newmessages })

}

handleCheckAll=()=> {
  const isEverythingSelected = this.state.messages.every(data => data.selected)
  const messageList = this.state.messages

  let newmessages = isEverythingSelected 
    ? messageList.map(({selected, ...message}) => ({...message})) 
    : messageList.map(message => ({...message, selected: true}))

  this.setState( { messages: newmessages })
}

handleMarkAsRead=()=> {
  let messageList = this.state.messages

  let newmessages = messageList.map(message => {

    return message.selected ? { ...message, read: true} : {...message}
  })

  this.setState( { messages: newmessages })
}

handleMarkAsUnread=()=> {
  let messageList = this.state.messages

  let newmessages = messageList.map(message => {

    return message.selected ? { ...message, read: false} : {...message}
  })

  this.setState( { messages: newmessages })
}

handleApplyLabel= event=> {
  let messageList = this.state.messages

  let newmessages = messageList.map(message => {

    message.selected && (message.labels = [...message.labels, event.target.value])
    
    return message
  })
this.setState( {messages: newmessages})
}

handleRemoveLabel= event=> {
  let messageList = this.state.messages

  let newmessages = messageList.map(message => {
    
    message.selected && (message.labels = message.labels.filter(ele => (ele !== event.target.value)))

    return message
  })
  this.setState( {messages: newmessages})
}

handleDelete= () => {
  let newmessages = this.state.messages.filter(message => {
    return !message.selected
  })
  this.setState( {messages : newmessages})
}

  render() {
    return (
      <div className='container-fluid'>
        <Toolbar messageData={ this.state.messages } handleCheckAll={this.handleCheckAll} handleMarkAsRead={this.handleMarkAsRead} handleMarkAsUnread={this.handleMarkAsUnread} handleApplyLabel={this.handleApplyLabel} handleRemoveLabel={this.handleRemoveLabel} handleDelete={this.handleDelete}/>
        <Messages messageData={ this.state.messages } handleSelected={this.handleSelected} handleStarred={this.handleStarred} handleRead={this.handleRead}/>
      </div>
    );
  }
}

export default App;
