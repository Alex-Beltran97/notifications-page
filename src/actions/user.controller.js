import http from '../service/HTTPService';

const path = "/users";

export const getUsers = async () => await http.get(path);

export const getUserById = async ( id ) => await http.get(`${ path }/${ id }`);

export const patchUsers = async ( id ) => await http.patch(`${ path }/${ id }`, { "viewed": true });