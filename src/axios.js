let axios = require('axios');
let mockDataAdapter = require('axios-mock-adapter');

let mock = new mockDataAdapter(axios);


const getData = () => {
  mock.onGet('/user').reply(200, { 
    user: [
      { 
        name: 'Axios James',
        date: '02/12/2012'
      },
      { 
        name: 'Axios Bolu',
        date: '02/12/2012'
      }
  ]
  });

  axios.get('/users').then((res) => {
    console.log(res.data)
  });
}

export default getData;

