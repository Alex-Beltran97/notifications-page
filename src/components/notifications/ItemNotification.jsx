import React, { useEffect, useState } from 'react';

import { Avatar, IconButton, MenuItem, Paper, Stack, Typography } from '@mui/material';
import { IoCloseCircle } from 'react-icons/io5';
import ModalNotification from './ModalNotification';
import { useNotification } from '../../context/notificationContext';

const ItemNotification = ({ name, id }) => {

  const { handlersModal } = useNotification();

  const { handleOpenModal } = handlersModal;

  return (<>
    <MenuItem style={{ position: "relative" }} onClick={ ()=>{ handleOpenModal( id ) }}>
      <Paper style={{ padding: "1rem"}}>
        <Stack direction="row" alignItems="center">
          <Avatar />
          <div>
            <Typography variant='h6'> { name } </Typography>
            <Typography variant='subtitle1'>Requested to join the career Path</Typography>
          </div>
        </Stack>
      </Paper>      
    </MenuItem>
  </>);
};



export default ItemNotification;