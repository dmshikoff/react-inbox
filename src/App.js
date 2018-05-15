import React, { Component } from 'react';
// import messages from './seeds.json';
import axios from 'axios'
import Toolbar from './components/toolbar';
import Messages from './components/Messages';
import Compose from './components/compose';





class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      composeRendered : false,
      messages: []
    }
  }

  getMessages() {
    axios.get('http://localhost:8082/api/messages')
      .then(data => this.setState({ messages: data.data }))
  }

  postMessage = (subject, body) => {
    axios.post('http://localhost:8082/api/messages', {subject, body})
      .then(data => this.getMessages())
  }

  componentDidMount() {
    this.getMessages()
  }

  getId() {
    const idArray = this.state.messages
      .filter(message => (message.selected === true))
      .map(message => (message.id))
    return idArray
  }

  messagesRequest = (command, { id = this.getId(), cmd }) => {
    const normalizedId = typeof id === 'number' ? [id] : id
    axios.patch('http://localhost:8082/api/messages', { messageIds: normalizedId, command: command, ...cmd })
      .then(response => this.getMessages())
  }

  handleSelected = (id, selected) => {
    const newmessages = this.state.messages.map(ele => ele.id === id ? { ...ele, selected } : { ...ele })
    this.setState({ messages: newmessages })
  }

  handleRead = (id) => {
    const newmessages = this.state.messages.map(ele => ele.id === id ? { ...ele, read: true } : { ...ele })
    this.setState({ messages: newmessages })
  }

  handleCheckAll = () => {
    const isEverythingSelected = this.state.messages.every(data => data.selected)
    const messageList = this.state.messages

    let newmessages = isEverythingSelected
      ? messageList.map(({ selected, ...message }) => ({ ...message }))
      : messageList.map(message => ({ ...message, selected: true }))

    this.setState({ messages: newmessages })
  }

  toggleComposeForm = () => {
    this.setState({ composeRendered: !this.state.composeRendered })
  }

  render() {
    return (
      <div className='container-fluid'>
        <Toolbar messageData={this.state.messages} handleCheckAll={this.handleCheckAll} messagesRequest={this.messagesRequest} toggleComposeForm={this.toggleComposeForm} />
        {
          this.state.composeRendered && <Compose postMessage={this.postMessage} />
        }
        <Messages messageData={this.state.messages} handleSelected={this.handleSelected} handleRead={this.handleRead} messagesRequest={this.messagesRequest} />
      </div>
    );
  }
}

export default App;
