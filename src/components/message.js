import React from 'react';

const message = ({ message: { id, subject, read, starred, labels, selected }, handleSelected, handleStarred, handleRead }) => {
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
                            onClick={event => handleStarred(id)}
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

function isReadAndSelected(read, selected) {
    if (read && selected) {
        return 'row message read selected'
    }
    else if (!read && !selected) {
        return 'row message unread'
    }
    else if (!read && selected) {
        return 'row message unread selected'
    }
    else {
        return 'row message read'
    }
}

function isStarred(starred) {
    return starred ? 'star fa fa-star' : 'star fa fa-star-o'
}

export default message;

function hasLabel(id, labels){
    let labelDisplay = labels.map((ele, idx) => {
        return <span key={`label${idx}`} className='label label-warning'>{ele}</span>
    })
    return labelDisplay
}