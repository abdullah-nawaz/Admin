import { Tooltip,Icon,Radio,Button,Input,Form, Typography } from 'antd';
import React from 'react';
import {connect} from 'react-redux';
import {addDriver} from '../actions/DriverActions';

class createDriverForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        this.props.dispatch(addDriver(values));
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const RadioButton = Radio.Button;
    const RadioGroup = Radio.Group;
    const { Title } = Typography;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <div>
        <Title code style={{width:'100%', textAlign:'center', marginTop: '10px'}}>ADD DRIVER FORM</Title>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input driver E-mail!',
              }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input driver account password!',
              }],
            })(
              <Input type="password" />
            )}
          </Form.Item>

          <Form.Item
            label={(
              <span>
              Name&nbsp;
                <Tooltip title="What do you want name the driver?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
            )}
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input driver name!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item
            label={(
              <span>
              Licence plate number&nbsp;
                <Tooltip title="What do you want name the driver?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
            )}
          >
            {getFieldDecorator('license-plate-number', {
              rules: [{ required: true, message: 'Please input driver Licence plate number!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item
            label={(
              <span>
              Address&nbsp;
                <Tooltip title="What do you want name the driver?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
            )}
          >
            {getFieldDecorator('address', {
              rules: [{ required: true, message: 'Please input driver address!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item
            label="Phone Number"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
              initialValue: '+92'
            })(
              <Input addonBefore={'+92'} style={{ width: '100%' }} />
            )}
          </Form.Item>

          <Form.Item
            label="Gender"
          >
            {getFieldDecorator('gender', {
              initialValue: 'Male',
              size: 'small'
            })(
              <RadioGroup>
                <RadioButton value="Male">Male</RadioButton>
                <RadioButton value="Female">Female</RadioButton>
              </RadioGroup>
            )}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return{
    user:state.user
  }
}

export default Form.create()(connect(mapStateToProps)(createDriverForm));