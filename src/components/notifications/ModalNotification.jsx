import { Avatar, IconButton, Modal, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { useNotification } from '../../context/notificationContext';

const ModalNotification = () => {

  const { handlersModal, users } = useNotification();

  const { openModal, handleCloseModal } = handlersModal;

  const { userData } = users;

  return (<>
    <Modal
      open={ openModal }
      onClose={ handleCloseModal }
    >
      <Paper style={ paperStyle }>
        <Stack alignItems="center" gap={ 3 }>
          <Avatar style={{ width: "8rem", height: "8rem" }} />
          <Typography variant='h4'>{ userData?.name }</Typography>
          <Typography variant='h6'>Requested to join career path</Typography>
        </Stack>
        
      </Paper>
    </Modal>    
  </>);
};

const paperStyle = {
  position: "absolute",
  width: "50%",
  top: "8rem",
  left: "30rem",
  padding:"2rem"
};

const closeBtn = {
  position: "absolute",
  top: 0,
  right: 0,
};

export default ModalNotification;