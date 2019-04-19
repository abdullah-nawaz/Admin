export const LOGIN_SIGNUP = 'LOGIN_SIGNUP';

const local='http://localhost:3000';


export function login(email,password){
  console.log('im addin to cart', email)
  return(dispatch)=>{
    fetch(local+'/api/users',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email:email,password:password})
    }).then((response) =>response.json()).then(resjson=>{
      console.log('lolo',resjson.response);
      dispatch(loadInfo(LOGIN_SIGNUP,resjson.response))
    }).catch((error)=>{
      console.log('Error ',error);
    })
  }
}


export function signup(email,password,name){
  console.log('im addin to db', email)
  return(dispatch)=>{
    fetch(local+'/users',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email:email,password:password,name:name})
    })
  }
}


export function LoggedIn(response){
  return(dispatch)=>{
    dispatch(loadInfo(LOGIN_SIGNUP,response))
  }
}
export function logOut(){
  return(dispatch)=>{
    dispatch(loadInfo(LOGIN_SIGNUP,''));
  }
}
export function loadInfo(type,results) {
  return {
    type : type,
    payload : results
  }
}