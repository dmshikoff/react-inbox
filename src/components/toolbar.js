import React from 'react'

const setSquareBoxImg = messageData => {
  if (messageData.every(data => data.selected)) return <i className="fa fa-check-square-o"></i>
  else if (messageData.some(data => data.selected)) return <i className="fa fa-minus-square-o"></i>
  else return <i className="fa fa-square-o"></i>
}

const unreadMessageTotal = messageData => {
  let unreadMessages = messageData.filter(message => (message.read === false))
  return unreadMessages.length
}

const Toolbar = ({ messageData, handleCheckAll, messagesRequest, toggleComposeForm }) => {
  return (
    <div >

      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">
              {unreadMessageTotal(messageData)}
            </span>
            unread messages
          </p>
          <a className="btn btn-danger"
          onClick={event => toggleComposeForm()}
          >
            <i className="fa fa-plus"></i>
          </a>
          <button className="btn btn-default"
            onClick={event => handleCheckAll()}
          >
            {setSquareBoxImg(messageData)}
          </button>

          <button className="btn btn-default"
            onClick={event => messagesRequest('read', { cmd: { read: true } })}
          >
            Mark As Read
          </button>

          <button className="btn btn-default"
            onClick={event => messagesRequest('read', { cmd: { read: false } })}
          >
            Mark As Unread
          </button>

          <select className="form-control label-select"
            onChange={event => messagesRequest('addLabel', { cmd: { label: event.target.value } })}
          >
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select"
            onChange={event => messagesRequest('removeLabel', { cmd: { label: event.target.value } })}
          >
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default"
            onClick={event => messagesRequest('delete', {})}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    </div>
  )
}



export default Toolbar