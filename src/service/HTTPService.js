import axios from 'axios';

const instance = ()=> axios.create({
  baseURL: "http://localhost:3005"
});

const request = {
  get: ( path ) => instance().get( path ),
  patch: ( path, data ) => instance().patch( path, data ),
};

export default request;