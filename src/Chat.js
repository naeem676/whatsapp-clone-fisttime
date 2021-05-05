import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useState } from 'react';
import axios from './Axios'

const Chat = ({message}) => {
    console.log(message)
    const [input, setInput] = useState("")
    const sendMessages = async (e) => {
        
        axios.post("/messages/new", {
            message:input,
            name:'naeem',
            time:'just now',
            received: false
        });
        setInput('');
        e.preventDefault();
    }
    
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src=""/>

                <div className="chat_info">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {message.map(msg => <p className={`chat_message ${msg.received && "chat_receiver"}`}>
                    <span className="Chat_name">naeem</span>
                    {msg.message}
                    <span className="chat_time">{new Date().toUTCString()}</span>
                    </p>)}
                   
                    
            </div>
            <div className="chat_footer">
                  <InsertEmoticonIcon/>
                  <form>
                      <input value={input} onChange={e=>setInput(e.target.value)}
                      placeholder="Type a message"
                       type="text"/>
                       <button onClick={sendMessages} type="submit" >Send a message</button>
                       
                  </form>
                  <MicIcon/>
            </div>
            
        </div>
    );
};

export default Chat;