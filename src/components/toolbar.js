import React from 'react'


const Toolbar = ({ messageData, handleCheckAll, handleMarkAsRead, handleMarkAsUnread, handleApplyLabel, handleRemoveLabel, handleDelete }) => {
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

          <button className="btn btn-default"
          onClick={event => handleCheckAll()}
          >
            {setSquareBoxImg(messageData)}
          </button>

          <button className="btn btn-default"
          onClick={event => handleMarkAsRead()}
          >
            Mark As Read
          </button>

          <button className="btn btn-default"
          onClick={event => handleMarkAsUnread()}
          >
            Mark As Unread
          </button>

          <select className="form-control label-select"
          onChange={event => handleApplyLabel(event)}
          >
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select"
          onChange={event => handleRemoveLabel(event)}
          >
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default"
          onClick={event => handleDelete()}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    </div>
  )
}


const setSquareBoxImg = messageData => {
  if (messageData.every(data => data.selected)) return <i className="fa fa-check-square-o"></i>
  else if (messageData.some(data => data.selected)) return <i className="fa fa-minus-square-o"></i>
  else return <i className="fa fa-square-o"></i>
}

const unreadMessageTotal = messageData => {
  let unreadMessages = messageData.filter(message => {
    return message.read === false
  })
  return unreadMessages.length
}



export default Toolbar