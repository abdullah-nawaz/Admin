import { Menu,Layout,Modal,Button,Input,Form } from 'antd';
import React from 'react';
import Login from './Login';
import {connect} from 'react-redux';
import Logout from './Logout';
import {Link} from 'react-router-dom';

const {Header}=Layout;
class Nav extends React.Component {
  state = {
    current: 'mail',
    visible: false,
    email:'',
    password:''
  }
  componentWillMount(){
    console.log(this.props.user,"NAVVVV")
  }
  render() {
    return (
      <Header>
        <div style={{width: '120px',height: '31px',background: 'rgba(255,255,255,.2)',margin: '16px 24px 16px 0',float: 'left'}} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          {this.props.user==''||this.props.user=='user not found'?<Login/>:''}
          {this.props.user!=''&&this.props.user!='user not found'?<Logout/>:''}


        </Menu>
      </Header>
    );
  }
}
const mapStateToProps=state=>{
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(Nav);