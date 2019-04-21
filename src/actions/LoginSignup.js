import fire from '../config/Fire';
export const LOGIN_SIGNUP = 'LOGIN_SIGNUP';



export function login(email,password){
  console.log('im addin to cart', email)
  return(dispatch)=>{
    fire.auth().signInWithEmailAndPassword(email, password).then(u=>{
      dispatch(loadInfo(LOGIN_SIGNUP,u))
    });
  }
}


// export function signup(email,password,name){
//   console.log('im addin to db', email)
//   return(dispatch)=>{
//     fetch(local+'/users',{
//       method:'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body:JSON.stringify({email:email,password:password,name:name})
//     })
//   }
// }


export function LoggedIn(response){
  return(dispatch)=>{
    dispatch(loadInfo(LOGIN_SIGNUP,response))
  }
}
export function logOut(){
  return(dispatch)=>{
    fire.auth().signOut().then(()=>{
      dispatch(loadInfo(LOGIN_SIGNUP,''));
    });
  }
}
export function loadInfo(type,results) {
  return {
    type : type,
    payload : results
  }
}