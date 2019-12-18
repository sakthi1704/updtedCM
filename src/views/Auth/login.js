import React from 'react';
import store from 'store';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as routes from '../../components/Constants/appRoutes';
import isLoggedIn from '../../components/helpers/is_logged_in';
import './style.css'
import AuthClient from "../../lib/services/api/auth_service";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false,
      results:[],
      open:false
    };
  }
  
  // async login (e) {
  //   e.preventDefault();
  //   const form = new FormData(e.target);
  //   // form.set('admin_user[email]','admin@visitroof.com');
  //   // form.set('admin_user[password]','pwd1234$');
  //   axios({
  //     method: 'post',
  //     url: 'http://10.10.10.166:3000/api/v1/admin_users/login',
  //     data: form,
  //     headers: {'Content-Type': 'multipart/form-data' }
  //     })
  //     .then(function (response) {
  //         //handle success
  //         console.log(response);
  //     })
  //     .catch(function (response) {
  //         //handle error
  //         console.log(response);
  //     });
  //   // const results =  axios.post('http://10.10.10.166:3000/api/v1/admin_users/login',
  //   // )
  
  //   // .then(function (response) {
  //   //   alert('dsbhdg')
  //   //   console.log(response,'response');
  //   // })
  //   //  this.setState({results})
  //   }
  onSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const formData = new FormData(e.target);
    AuthClient.login(formData).then((response) => {
      console.log('response', response)
      store.set('loggedIn', true);
      history.push(routes.HOME);
    }).catch((message) => {
      this.setState({ error: true });
    });
};
// onSubmit = (e) => {
//     e.preventDefault();
//     const form = new FormData(e.target);
//     axios({
//       method: 'post',
//       url: 'http://roof-api-dev.me-south-1.elasticbeanstalk.com/api/v1/admin_users/login',
//       data: form,
//       headers: {'Content-Type': 'multipart/form-data' }
//       })
//       .then((response) => {
//         // const authHeaders = JSON.parse(localStorage.getItem('token'));
//         // const client = axios.create({
//         //     baseURL: BASE_URL,
//         //     headers: authHeaders
//         // });
//         Cookies.set('token', response.data.token)
//         //this.setState({name: response.data.name});
//       })
//       // .then(function (response) {
//       //     //handle success
//       //     this.setState({ error: false });
//       //     console.log(response);
//       // })
//       .catch((e) => 
//       {
//         console.error(e);
//         this.setState({ error: true })
//       });
//       // .catch(function (response) {
//       //     //handle error
//       //     console.log(response);
//       //     this.setState({ error: true })
//       // });
//     const { email, password } = this.state;
//     const { history } = this.props;
//     console.log('cookies.get(', Cookies.get())
//     // this.setState({ error: false });
    
//     // if (!(email === '' && password === '')) {
//     //   return this.setState({ error: true });
//     // }

//     store.set('loggedIn', true);
//     history.push(routes.HOME);
//   }
 handleClick = () => {
  this.setState({open:true});
};

 handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  this.setState({open:false});
};

  render() {
    const { error,open } = this.state;
    console.log('error', error)

    if (isLoggedIn()) {
      return <Redirect to={routes.HOME} />;
    }
    return (
        <div id="parent">
             <form className="signin-bg"  onSubmit={this.onSubmit} autoComplete="off">
             <h2 as='h2' style={{color:"white"}}>
       ROOF
      </h2>
      {error && 
              <h2>That username/password is incorrect. Try again!</h2>
            }
                       <div>
                         <TextField 
                           className="login-bg-color"
                           placeholder="E-mail" 
                           variant="outlined" 
                           name='admin_user[email]'
                           />
                           </div> <br />
                           <div>
                            <TextField
                           className="login-bg-color"
                           placeholder='Password' 
                           name='admin_user[password]'
                           type="password"
                           variant="outlined" 
                           />
                           </div><br /> <br />
                           <div>
                            <Button
                            className="button-width"
                            type="submit"
                            size="medium"
                            variant="contained"
                            color="secondary"
                            // onClick={error ? this.handleClick : null}
                        >
                            Login
                        </Button>
                        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Invalid username or password</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className="close"
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
                        </div>
                 </form>   
        </div>
    )
}

}


