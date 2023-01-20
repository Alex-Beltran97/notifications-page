import React, { useEffect, useState } from 'react';

import { useContext } from 'react';
import { createContext } from "react";
import { getUserById, getUsers, patchUsers } from '../actions/user.controller';

const NotificationContext = createContext();

export const useNotification = () =>{

  const context = useContext( NotificationContext );

  if( context ) return context;

  return null;
};

// Component

export const NotificationProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const getUsersData =  async () =>{
    try{

      const { data } = await getUsers();

      setUsers( data.filter( item => !item.viewed ) );

    } catch ( error ){

      console.log( error );
    };
  };

  const removeNotification = ( id = 0 ) =>{

    const listUsers = [...users];

    setUsers( listUsers.filter( notif => notif.id !== id ));
  };
  
  const updateNotificationStatus =  async ( id = 0 ) =>{

    try{

      const result = await patchUsers( id );

      removeNotification( id );

    } catch ( error ){

      console.log( error );
    };
  };


  useEffect(() => {
    getUsersData();
  }, []);

  // Handlers Menu

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Handlers Modal

  const [openModal, setOpenModal] = useState( false );

  const handleOpenModal = async ( id = 0 )=> {
    setOpenModal( true );

    try{

      const { data } = await getUserById( id );

      setUser( data );

    } catch ( error ) {

      console.log( error );
    };
  };

  const handleCloseModal = ()=>{ 
    setOpenModal( false );

    setUser({});

    handleCloseMenu();
  };


  return (<>
      <NotificationContext.Provider value={{
        users:{
          usersData: users,
          updateNotificationStatus,
          userData: user
        },
        handlersMenu: {
          anchorEl,
          openMenu,
          handleClickMenu,
          handleCloseMenu
        },
        handlersModal: {
          openModal,
          handleOpenModal,
          handleCloseModal
        }
      }}>
        { children }
      </NotificationContext.Provider>
    </>);
};
