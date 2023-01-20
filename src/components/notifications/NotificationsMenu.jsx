import React, { Fragment, useEffect, useState } from 'react';

import { Badge, IconButton, Menu, MenuItem } from '@mui/material';
import { IoCloseCircle, IoNotificationsCircleSharp } from 'react-icons/io5';
import ItemNotification from './ItemNotification';
import { useNotification } from '../../context/notificationContext';
import ModalNotification from './ModalNotification';

const NotificationsMenu = () => {
  
  const{ users, handlersMenu } = useNotification();

  const { usersData, updateNotificationStatus } = users;

  const { handleClickMenu, handleCloseMenu, anchorEl, openMenu } = handlersMenu;

  return (<>
    <IconButton onClick={ handleClickMenu }>
      <Badge badgeContent={ usersData.length } color="error">
        <IoNotificationsCircleSharp color="#fff" />
      </Badge>
    </IconButton>
    <Menu
      anchorEl={ anchorEl }
      open={ openMenu }
      onClose={ handleCloseMenu }
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 16,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
    >
      { usersData.map( ({ name, id }) =>(
        <div key={ id } style={{ position: 'relative'}}>
          <ItemNotification
            id={ id }
            name={ name }
          />
          <IconButton style={ closeBtn } onClick={ ()=> updateNotificationStatus( id ) }>
            <IoCloseCircle />
          </IconButton>
        </div>
      )) }
      <ModalNotification />
    </Menu>
  </>)
};

const closeBtn = {
  position: "absolute",
  top: 0,
  right: 0,
};

export default NotificationsMenu;