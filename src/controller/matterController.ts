import axios from 'axios';

export const readRequest = (data: string): Promise<WoT.InteractionInput> => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://192.168.2.32:9080/read',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  return new Promise((resolve, reject) => {
    axios
      .request(config)
      .then((response) => {
        resolve(response.data.response['OnOff::OnOffA']);
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
    url: 'http://192.168.2.32:9080/invoke',
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
