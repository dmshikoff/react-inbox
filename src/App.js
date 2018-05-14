import React, { Component } from 'react';
import seeds from './seeds.json';
import Toolbar from './components/toolbar';
import Messages from './components/Messages';





class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        seeds: seeds
    }
}

handleSelected = (id, selected) => {
  const newSeeds = this.state.seeds.map(ele => ele.id === id ? {...ele, selected} : {...ele})

  this.setState( { seeds: newSeeds })
  
}

handleStarred =(id) => {
  const newSeeds = this.state.seeds.map(ele => ele.id === id ? {...ele, starred: !ele.starred} : {...ele})

  this.setState( { seeds: newSeeds })

}

handleRead=(id) => {
  const newSeeds = this.state.seeds.map(ele => ele.id === id ? {...ele, read: true} : {...ele})

  this.setState( { seeds: newSeeds })

}

handleCheckAll=()=> {
  const isEverythingSelected = this.state.seeds.every(data => data.selected)
  const messageList = this.state.seeds

  let newSeeds = isEverythingSelected 
    ? messageList.map(({selected, ...message}) => ({...message})) 
    : messageList.map(message => ({...message, selected: true}))

  this.setState( { seeds: newSeeds })
}

handleMarkAsRead=()=> {
  let messageList = this.state.seeds

  let newSeeds = messageList.map(message => {

    return message.selected ? { ...message, read: true} : {...message}
  })

  this.setState( { seeds: newSeeds })
}

handleMarkAsUnread=()=> {
  let messageList = this.state.seeds

  let newSeeds = messageList.map(message => {

    return message.selected ? { ...message, read: false} : {...message}
  })

  this.setState( { seeds: newSeeds })
}

handleApplyLabel= event=> {
  let messageList = this.state.seeds

  let newSeeds = messageList.map(message => {

    message.selected && (message.labels = [...message.labels, event.target.value])
    
    return message
  })
this.setState( {seeds: newSeeds})
}

handleRemoveLabel= event=> {
  let messageList = this.state.seeds

  let newSeeds = messageList.map(message => {
    
    message.selected && (message.labels = message.labels.filter(ele => (ele !== event.target.value)))

    return message
  })
  this.setState( {seeds: newSeeds})
}

handleDelete= () => {
  let newSeeds = this.state.seeds.filter(message => {
    return !message.selected
  })
  this.setState( {seeds : newSeeds})
}

  render() {
    return (
      <div className='container-fluid'>
        <Toolbar messageData={ this.state.seeds } handleCheckAll={this.handleCheckAll} handleMarkAsRead={this.handleMarkAsRead} handleMarkAsUnread={this.handleMarkAsUnread} handleApplyLabel={this.handleApplyLabel} handleRemoveLabel={this.handleRemoveLabel} handleDelete={this.handleDelete}/>
        <Messages messageData={ this.state.seeds } handleSelected={this.handleSelected} handleStarred={this.handleStarred} handleRead={this.handleRead}/>
      </div>
    );
  }
}

export default App;
