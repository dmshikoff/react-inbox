import React from 'react';
import Message from './message'



const Messages = (props) => {
    const { messageData, handleSelected, handleStarred, handleRead } = props

    let messageList = messageData.map(message => {
        return <Message key={message.id} message={message} handleSelected={handleSelected} handleStarred={handleStarred} handleRead={handleRead}/>
    })
    return(
        <div>
            { messageList }
        </div>
    )
    
}



// class MessageList extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             messageList: ''
//         }


//     }

//     render() {

//         return (
//             <div >
//                 <div className="row message unread">
//                     <div className="col-xs-1">
//                         <div className="row">
//                             <div className="col-xs-2">
//                                 <input type="checkbox" />
//                             </div>
//                             <div className="col-xs-2">
//                                 <i className="star fa fa-star-o"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-11">
//                         <a href="#">
//                             Here is some message text that has a bunch of stuff
//                         </a>
//                     </div>
//                 </div>
//                 <div className="row message read">
//                     <div className="col-xs-1">
//                         <div className="row">
//                             <div className="col-xs-2">
//                                 <input type="checkbox" />
//                             </div>
//                             <div className="col-xs-2">
//                                 <i className="star fa fa-star-o"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-11">
//                         <a href="#">
//                             Here is some message text that has a bunch of stuff
//                         </a>
//                     </div>
//                 </div>
//                 <div className="row message read selected">
//                     <div className="col-xs-1">
//                         <div className="row">
//                             <div className="col-xs-2">
//                                 <input type="checkbox" checked="checked" />
//                             </div>
//                             <div className="col-xs-2">
//                                 <i className="star fa fa-star-o"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-11">
//                         <a href="#">
//                             Here is some message text that has a bunch of stuff
//                         </a>
//                     </div>
//                 </div>
//                 <div className="row message read">
//                     <div className="col-xs-1">
//                         <div className="row">
//                             <div className="col-xs-2">
//                                 <input type="checkbox" />
//                             </div>
//                             <div className="col-xs-2">
//                                 <i className="star fa fa-star"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-11">
//                         <a href="#">
//                             Here is some message text that has a bunch of stuff
//                         </a>
//                     </div>
//                 </div>
//                 <div className="row message read">
//                     <div className="col-xs-1">
//                         <div className="row">
//                             <div className="col-xs-2">
//                                 <input type="checkbox" />
//                             </div>
//                             <div className="col-xs-2">
//                                 <i className="star fa fa-star"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-11">
//                         <span className="label label-warning">dev</span>
//                         <span className="label label-warning">gschool</span>
//                         <a href="#">
//                             Here is some message text that has a bunch of stuff
//                         </a>
//                     </div>
//                 </div>
//                 <div className="row message read">
//                     <div className="col-xs-1">
//                         <div className="row">
//                             <div className="col-xs-2">
//                                 <input type="checkbox" />
//                             </div>
//                             <div className="col-xs-2">
//                                 <i className="star fa fa-star"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xs-11">
//                         <span className="label label-warning">dev</span>
//                         <span className="label label-warning">gschool</span>
//                         <a href="#">
//                             Here is some message text that has a bunch of stuff
//                         </a>
//                     </div>
//                 </div>
//                 <div className="row message-body">
//                     <div className="col-xs-11 col-xs-offset-1">
//                         This is the body of the message.
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

export default Messages