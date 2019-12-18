// import React, { Component } from "react";
// import { search } from "./utils";
// import SearchMenu from './SearchMenu';
// import Grid from '@material-ui/core/Grid';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
// import axios from 'axios';
// import Cookies from 'js-cookie'


// class SearchComp extends Component {
//   state = {
//       searchValue: null,
//       loading: false,
//       currentValue: [],
//       data:{}
//   };
//   componentDidMount() {
//     console.log('I am mounted!');
//   }
//   // search = async val => {
//   //   this.setState({ loading: true });
//   //   const results = await search(
//   //     `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
//   //   );
//   //   const searchValue = results;

//   //   this.setState({ searchValue, loading: false });
//   // };

//   onChangeHandler =  (e) => {
//     this.search(e.target.value);
//     this.setState({ currentValue: e.target.value });
 

//   };

//   get renderMovies() {
//     let movies = <h1 />;
//     if (this.state.searchValue) {
//       movies = <SearchMenu list={this.state.searchValue} />;
//     }

//     return movies;
//   }
//   handleClickShowPassword(){
//     this.setState({ currentValue: "" });
//   }
//   render() {
//     return (
//             <Grid>
              
//             <MenuItem   style={{width:"100vh"}}>
//               <TextField 
//               id="standard-full-width"
//               fullWidth
//               type="search" 
//               placeholder='Search for company, employee, jobs...'  
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon
//                       // onClick={this.handleClickShowPassword}
//                     >
//                     </SearchIcon>
//                   </InputAdornment>
//                 )
//         }}
               
//                onChange={e => this.onChangeHandler(e)}/>
//               </MenuItem>  <br />
//               {this.renderMovies}
//           </Grid>
  
//     );
//   }
// }

// export default SearchComp;


import React from 'react';
import {makeStyles} from "@material-ui/core/styles/index";

//Material UI components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

//Material UI Icons
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: '8px',
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
});

export default function SearchComp() {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid item xs={12} md={6}>
                <Paper className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Input one"
                    />
                    <IconButton className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}