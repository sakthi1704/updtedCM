import React, { useState } from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { Route, Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import './index.css'
import { TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Cookies from 'js-cookie'
import axios from 'axios'
import DataClient from "../../lib/services/api/get_data_service";
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
// import UserEdit from './UserEdit';

const useStyles = makeStyles({
  root: {
    width: '90%',
    height:'100%',
    marginTop:8,
    paddingRight:12
  },
  table: {
    minWidth: 200,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  prflStyle: {
      display: 'flex',
    },
});
const CompanyInfo = (props) => {
  // const { values } = this.props;
  // const { id1 } = this.props;
  const uid = props.match.params.id;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({});
//  let cards='<h2 />';
//  cards= list;
//  alert(values)
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  React.useEffect(()=>{
//     DataClient.getData(`/admin_users/consumer_details?id=${uid}`).then((res)=>{
          
//       console.log('DataClient', res.user)
// // setData({...res.user});
//     })
    console.log('params', props.match.params.id)
    axios.get(`http://roof-api-dev.me-south-1.elasticbeanstalk.com/api/v1/admin_users/consumer_details?id=${uid}`,{
      headers:{
        Authorization: Cookies.get('token')
      }
    }).then((res) => {
      console.log('res', res.data['user'], JSON.parse(JSON.stringify(res.data['user'])))
      // const timer = setTimeout(() => {
      //   console.log('This will run after 1 second!', value)
      //   console.log('res', res.data['user'], JSON.parse(JSON.stringify(res.data['user'])))
      //   // setValue(res.data['user'])
      //   console.log('value', value)
      // }, 3000);
      // return () => clearTimeout(timer);
        })
 
  },[])
const editUser = () =>{
props.history.push('/users/:id/edit');
}
  return (
    
    <div>
          <br /><br/> 
            <Paper className={classes.root}>
              <br />
            <FormControl align="right" style={{display:"block"}}>
                <FormGroup>
                <FormControlLabel
                    value="top"
                    control={<Switch color="secondary" />}
                    label="Active / Inactive"
                    labelPlacement="top"
                    />
                </FormGroup>
                <IconButton type="submit" onClick={() => {
                editUser()}}>
        <EditIcon />
      </IconButton>
            </FormControl>    
            <br />
        <Table className={classes.table}>
              <TableRow>
                <TableCell component="th" scope="row">
               Name
                </TableCell>
                <TableCell align="right">
                 
                           </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                No.of orders created
                </TableCell>
                <TableCell align="right">
                  {/* {state.user} */}
                  </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Mail ID
                </TableCell>
                <TableCell align="right">
                  {/* {state.user} */}
                  </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
               Contact Number
                </TableCell>
                <TableCell align="right">
                 
                           </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
               Address
                </TableCell>
                <TableCell align="right">
                 
                           </TableCell>
              </TableRow>
              </Table> <br /> <br />
              <Button style={{display:"block", float:"right"}} variant="contained" color="secondary" onClick={handleClickOpen}>
            Reset Password
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Are you sure you want to reset password?"}</DialogTitle>
                    <DialogActions>
                    <Button onClick={handleClose} color="blue" autoFocus>
                        Yes
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                        No
                    </Button>
                    </DialogActions>
                </Dialog> <br /> <br />
              </Paper> <br/>
    {/* <Route  path="/users/:id/edit" component={UserEdit} /> */}
    </div>
  );
}

export default CompanyInfo;