import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDrivers} from "../actions/DriverActions";
import {Table, Input, Button, Icon,Badge,Tag} from 'antd';
import {removeDriver} from "../actions/DriverActions";

class driversList extends  Component {

  componentWillMount() {
    this.props.dispatch(getDrivers());
  }

  getRandomColor=()=> {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'Name',
      render:(dataIndex)=><strong>{dataIndex}</strong>,
      key: 'name',
      // ...this.getColumnSearchProps('name'),
    }, {
      title: 'Email',
      dataIndex: 'Email',
      key: 'email',
      width: '20%',
      // ...this.getColumnSearchProps('age'),
    }, {
      title: 'Address',
      dataIndex: 'Address',
      key: 'address',
      // ...this.getColumnSearchProps('address'),
    }, {
      title: 'Gender',
      dataIndex: 'Gender',
      key: 'gender',
      // ...this.getColumnSearchProps('address'),
    }, {
      title: 'Licence Plate',
      dataIndex: 'Licence-Plate-Number',
      render:(dataIndex)=><Tag checked color={this.getRandomColor()}>{dataIndex}</Tag>,
      key: 'Licence-Plate-Number',
      // ...this.getColumnSearchProps('address'),Licence-Plate-Number,
    }, {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'phone',
      // ...this.getColumnSearchProps('address'),Licence-Plate-Number
    }, {
      title: 'Status',
      dataIndex: 'Status',
      render:(dataIndex)=><strong>{dataIndex==='Free'?<Badge status="success" text="Avalibale" />:<Badge status="error" text="Busy" />}</strong>,
      key: 'status',
      // ...this.getColumnSearchProps('address'),Licence-Plate-Number
    }, {
      title: 'Action',
      dataIndex: 'Driver-id',
      render:(dataIndex)=><Icon type="delete" onClick={()=>this.props.dispatch(removeDriver(dataIndex))} />,
      key: 'delete',
      // ...this.getColumnSearchProps('address'),Licence-Plate-Number
    }];
    return (
      <div>
        <Table
          style={{marginTop:'30px'}}
          title={()=><strong style={{fontSize:'24px'}}>Drivers List</strong>}
          columns={columns}
          pagination={false}
          dataSource={this.props.driversList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    driversList: state.driver.driversList
  }
};
export default connect(mapStateToProps)(driversList)