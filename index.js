// ES_6
const axios = require('axios');

const urlUrlOne = 'https://api.github.com/users/octocat';
const urlUrlTwo = 'https://api.github.com/users/TetraPost';


const setOneRequest = () => {
  const one = axios.get(urlUrlOne).then((resolve, reject) => {
    if (!reject) {
      return resolve.data.avatar_url;
    }
  });
  return one;
};

const setTwoRequest = () => {
  const two = axios.get(urlUrlTwo).then((resp, reject) => {
    if (!reject) {
      return resp.data.node_id;
    }
  });
  return two;
};

const arrMass = [
  setOneRequest(),
  setTwoRequest(),
];

const funcZ = () => {
  Promise.all(arrMass).then(data => {
      console.log(data);
  }, reason => {
      console.log(reason);
  });
}

funcZ();
