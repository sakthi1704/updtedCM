import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './index.css'
import Cookies from 'js-cookie'
import DataClient from "../../lib/services/api/get_data_service";
import axios from 'axios'

function Profile() {
  const [data, setData] = React.useState({});
  const uid =Cookies.get('uid')
  useEffect(() => {
    DataClient.getData(`/admin_users?id=${uid}`).then((res)=>{
          
          console.log('DataClient', res.user)
  setData({...res.user});
        })
//     axios.get(`http://roof-api-dev.me-south-1.elasticbeanstalk.com:80/api/v1/admin_users?id=${uid}`,{
//   headers:{
//     Authorization: Cookies.get('token')
//   }
// }).then((res) => {
//   // console.log('uidVal', res.data['user'].first_name)
//   setData(res.data['user'].first_name);
//     })
   
}, []);
console.log('uidVal', data)
  return (
    <div>
      <Grid>
            <Grid floated='left' width={4}>
              <Avatar 
                src="/static/images/avatar/1.jpg" 
                style={{
                  margin: "10px",
                  width: "60px",
                  height: "60px",
                }} 
          />
              <label >{data.email}</label><br />
              <label >super admin</label>
              <div className="divider-class"></div>  
            </Grid>
            <Grid className="changeStyle" floated='right' width={12}>
            <Link to={'/users/'}>Change password</Link> <br /> <br />
            <Link to={'/users/'}>Add user</Link><br /> <br />
            </Grid>
          </Grid>
    </div>
  );
}
export default Profile;

