import React from 'react';
import {Route,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
export function ProtectedRoute({component:Componentt,user:user}){
  console.log("%%%%%%%%%%%",user);
  return(
    <Route render={(props) => (
      (user==''||user=='user not found')
        ? <Redirect to='/' />
        : <Componentt />
    )} />

  );

}