import React from 'react';
import './Sidbar.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, Avatar } from '@material-ui/core';
import SidebarChat from './SidebarChat';

const SidBar = () => {
    return (
        <div className="sidBar">
            <div className="sidebar_header">
                <Avatar src=""/>
                <div className="sidbar_headerRight">
                  <IconButton>
                      <DonutLargeIcon/>
                  </IconButton>
                  <IconButton>
                      <ChatIcon/>
                  </IconButton>
                  <IconButton>
                      <MoreVertIcon/>
                  </IconButton>
                </div>
            </div>
            <div className="sidbar_search">
                <div className="sidbar_searchContainer">
                <SearchIcon/>
                <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidbar_chats">
                <SidebarChat/>
            </div>
        </div>
    );
};

export default SidBar;