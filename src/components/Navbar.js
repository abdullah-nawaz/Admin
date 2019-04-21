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
        <Link to='/' style={{width: '120px',background: 'rgba(255,255,255,.2)',marginRight: '44px',float: 'left'}} ><strong>Medicare Admin</strong></Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item>{this.props.user!==''&&<Link to='/'>Drivers List</Link>}</Menu.Item>
          <Menu.Item>{this.props.user!==''&&<Link to='/addDriver'>Add Driver</Link>}</Menu.Item>
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