import React from 'react';
import {Form, Icon, Input, Button,} from 'antd';
import {login} from '../actions/LoginSignup';
import { connect } from 'react-redux';
// import Signup from './Signup';

const FormItem = Form.Item;

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      password:'',
      email:''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Received values of form: ');
    this.props.dispatch(login(this.state.email,this.state.password))
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} onChange={this.handleChange} style={{float:'right', marginTop:'1.2%'}}>
        <FormItem
          validateStatus=''
        >
          <Input name='email' value={this.state.email} size='small' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
        </FormItem>
        <FormItem
          validateStatus=''
        >
          <Input name='password' value={this.state.password} size='small' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            size='small'
          >
            Log in
          </Button>{' '}
          {/*<Signup/>*/}
        </FormItem>
      </Form>
    );
  }


}
export default connect(null, null)(Login);