import React from 'react';

const message = ({ message: { id, subject, read, starred, labels, selected }, handleSelected, handleRead, messagesRequest }) => {
    return (
        <div className={isReadAndSelected(read, selected)}>
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input type="checkbox"
                            checked={selected || false}

                            onChange={event => handleSelected(id, event.target.checked)}
                        />
                    </div>
                    <div className="col-xs-2">
                        <i className={isStarred(starred)}
                            onClick={event => messagesRequest('star', { id })}
                        ></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11"
                onClick={event => handleRead(id)}
            >
                {hasLabel(id, labels)}
                <a href="#">
                    {subject}
                </a>
            </div>
        </div>
    )
}

function hasLabel(id, labels) {
    let labelDisplay = labels.map((ele, idx) => {
        return <span key={`label${idx}`} className='label label-warning'>{ele}</span>
    })
    return labelDisplay
}

function isReadAndSelected(read, selected) {
    let messageClass;
    if (read && selected) messageClass = 'row message read selected'
    else if (!read && !selected) messageClass = 'row message unread'
    else if (!read && selected) messageClass = 'row message unread selected'
    else messageClass = 'row message read'
    return messageClass
}

function isStarred(starred) {
    return starred ? 'star fa fa-star' : 'star fa fa-star-o'
}

export default message;