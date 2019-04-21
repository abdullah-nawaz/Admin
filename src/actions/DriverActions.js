import fire from '../config/Fire';
export const DRIVERS_FETCHED = 'DRIVERS_FETCHED';
export const DRIVER_DELETED = 'DRIVER_DELETED';

export function addDriver(formObject){
  // return(dispatch)=>{
    fetch('http://127.0.0.1:5000/addDriver', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
    }).then(response=>{
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data])
    }).then(([res, data])=>{
      console.log(res);
      if(res===200) {
        if (data.response==='Driver Created') {
          alert('driver created')
        }
        else {
          alert('driver not created')
        }
      }
      else {
        alert('something went wrong on backend');
      }
    });
}

export function getDrivers() {
  return(dispatch) => {
    fire.database().ref('/Users/Drivers').once('value').then(snapshot=>{
      let data = snapshot.val();
      let arr =[]
      for(let key in data) {
        // console.log('kakakakka',data[key]);
        arr.push(data[key]);
      }
      dispatch(loadInfoo(DRIVERS_FETCHED, arr))
    });
  }
}

export const removeDriver=(id) =>{
  console.log(id)
  return (dispatch) => {
    fetch('http://127.0.0.1:5000/deleteDriver', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({uid: id})
    }).then(response => {
      // console.log(response.response)
      const statusCode = response.status;
      const data = response.json().then(res=>{
        if (res.response === 'Driver Deleted') {
          dispatch(loadInfoo(DRIVER_DELETED, id));
        } else {
          alert('driver not deleted');
        }
      });
      return Promise.all([statusCode, data])
    });
  }
}
export function loadInfoo(type,results) {
  return {
    type : type,
    payload : results
  }
}