import axios from 'axios';
import { baseUrl } from '../..';

export const readRequest = (data: string): Promise<WoT.InteractionInput> => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `http://${baseUrl}/read`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  return new Promise((resolve, reject) => {
    axios
      .request(config)
      .then((response) => {
        resolve(response.data.response);
      })
      .catch((error) => {
        console.log(error);
        return new Promise((resolve, reject) => {
          resolve(undefined);
        });
      });
  });
};

export const invokeRequest = (data: string): Promise<WoT.InteractionInput> => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `http://${baseUrl}/invoke`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  return new Promise((resolve, reject) => {
    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        return new Promise((resolve, reject) => {
          resolve(undefined);
        });
      });
  });
};
