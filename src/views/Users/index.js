import React, {useEffect, useState, createContext} from 'react';
import PropTypes from 'prop-types'
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Cookies from 'js-cookie'
import axios from 'axios'
import { Route, Link, Switch } from 'react-router-dom';
import DataClient from "../../lib/services/api/get_data_service";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Grid from '@material-ui/core/Grid';
import UserInfo from './UserInfo';
export const Context = createContext({});

const useStyles = makeStyles(theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  const useStyles1 = makeStyles(theme => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));
  const StyledTableCell = withStyles(theme => ({
    // head: {
    //   backgroundColor: "blue",
    //   color: theme.palette.common.white,
    // },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = event => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = event => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = event => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = event => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  
  function createData(id, name, email) {
    return { id, name, email };
  }

  const useStyles2 = makeStyles({
    root: {
      width: '95%',
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
  
export default function Users(props) {
  
    const classes = useStyles2();
 
    // const {data} = props;
    const [page, setPage] = React.useState(0);
    const [selected, setSelected] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [value, setValue] = React.useState(null);
    const[showDetail, setShowDetail] = React.useState(false)
    
    const [state, setState] = React.useState({
   users:[]
  });
  const [data, setData] = React.useState([]);
  
  const[consumer, setConsumer]=React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log('props', props)
  const usersContext = {
   data
  };
  useEffect(() => {
//     axios.get('http://roof-api-dev.me-south-1.elasticbeanstalk.com/api/v1/admin_users/consumers_list',{
//   headers:{
//     Authorization: Cookies.get('token')
//   }
// }).then((res) => {
//         console.log('res', res.data['users'])
//         setData(res.data['users']||[]);
//     })
    DataClient.getData(`/admin_users/consumers_list`).then((res)=>{
          
      console.log('DataClient', res.users)
setData(res.users);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
//   React.useEffect(()=>{
// //         DataClient.getData('/admin_users/consumers_list').then((data)=>{
          
// //           setConsumers({data});
// //        console.log('data', consumers,data.users.map(i =>(i.first_name)))
//         // axios.request({
//         //   url:'http://roof-api-dev.me-south-1.elasticbeanstalk.com/api/v1/admin_users/consumers_list',
//         //   method:'GET',
//         //   headers:{
//         //    Authorization:Cookies.get('token')
//         //  },
//         // })
// // // //      axios.get('http:///11.11.11.64::3000/api/v1/admin_users/consumers_list', {
// // // //  headers: {
// // // //    Authorization: Cookies.get() //the token is a variable which holds the token
// // // //  }

// // // })
// axios.get('http://roof-api-dev.me-south-1.elasticbeanstalk.com/api/v1/admin_users/consumers_list',{
//   headers:{
//     Authorization: Cookies.get('token')
//   }
// })
//     .then(response => {
//       console.log( response.data.users);
//       const users = response.data.users;
//       consumers.push({ city: `${city.name}`, description });
// // this.setState(cities);
//       setConsumers(users);
     
//     }); 
//     console.log('state.user', consumers, typeof consumers )     
// },[]);
// React.useEffect(()=>{
// //   DataClient.getData('/admin_users/consumers_list').then((data)=>{
          
// //     console.log('data', data)
// //     const consumers1 = data.users;
// //     setConsumers(consumers1);
// //     //  temp = data.users
// //  console.log('consumers', consumers)
// //   })
// makePostRequest()
// console.log('object', pdsummaryState)
// })
// async function makePostRequest() {
//  await DataClient.getData('/admin_users/consumers_list')
//     .then((data)=> {
//         console.log(data);  
//         setpdsummaryState(data.users); //Get only array
//         //This will never give you the updated state, because setState is async
//         console.log(pdsummaryState);      
//     })    
// }
  const handleClose = () => {
    setOpen(false);
  };
//  const handleChange =(e) => {
//   setState(e.target.value);
// }
//   const handleClick = (event,id) => {
   
//     // setValue(id);
//     // console.log('value', value)
//     let values = <h1 />;
//     if (this.state.searchValue) {
//       values = <SearchMenu list={this.state.searchValue} />;
//     }
    
   
        
// }

const renderValues = (id) => {

setShowDetail({showDetail: true})
   props.history.push(`/users/id=${id}`)
  //  props.data(data);
 if(data !==''){
  return  <UserInfo data={data} />
 }
}
 
    // }
    const isSelected = name => selected.indexOf(name) !== -1;
 const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  return (
      <div>
        {/* <Context.Provider value={usersContext}>{}</Context.Provider> */}
          <Grid container  justify="center">
          <Grid item xs={6}>
           <FormControl className={classes.formControl}>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'name',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Top 10 Users</option>
          <option value={20}>Top 100 Users</option>
          <option value={30}>Bottom 10 Users</option>
          <option value={30}>Bottom 100 Users</option>
        </NativeSelect>
      </FormControl>
    <br /><br/>
      <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
          </TableRow>
        </TableHead>
          <TableBody>
   
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row,index) => {
              const isItemSelected = isSelected(row.name);
              return (
              <TableRow key={row.id}  
              selected={isItemSelected}
              onClick={() => {
               renderValues(row.id)
            
           }}>
                <TableCell align="right"> 
                {row.id}
          {/* <Link to={`/users/id=${row.id}`}></Link>   */}
                </TableCell>
                <TableCell align="right">{row.first_name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
              </TableRow>
              );
})}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 20, 30, { label: 'All', value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                // SelectProps={{
                //   inputProps: { 'aria-label': 'rows per page' },
                //   native: true,
                // }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
    </Grid>
    <Grid item xs={6} style={{ display: (showDetail ? 'block' : 'none') }}>
    <Switch>
    <Route  path="/users/id:id" component={UserInfo} />
    </Switch>
     </Grid>
  
    </Grid>
   
      </div>
  );
}
export const { Consumer } = Context;
Users.propTypes = {
  data: PropTypes.array,
};