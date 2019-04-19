import React from 'react';
import {Form, Button,} from 'antd';
import {logOut} from '../actions/LoginSignup';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const FormItem = Form.Item;

class Logout extends React.Component{
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
    this.props.dispatch(logOut())
  }
  render() {
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} style={{float:'right', marginTop:'1.2%'}}>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            size='small'
            component={Link}
            to='/'
          >
            Log out
          </Button>
        </FormItem>
      </Form>
    );
  }


}
export default connect(null, null)(Logout);