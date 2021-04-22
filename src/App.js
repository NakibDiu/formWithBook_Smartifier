import React from 'react';
import {Container, CssBaseline, Box, Typography, FormControl, InputLabel, Input,Button} from '@material-ui/core'
import useStyle from './style';
import Description from './Description';
import Author from './Author'
const App  = () =>{
  const classes = useStyle();
  return (
      <>
        <CssBaseline/>
        <Container>
          <Container className = {classes.mainContainer}>
            <Box className = {classes.box}>
            <div className= {classes.book}>
                <div className= {classes.text}>
                  <Typography variant= "h4" className= {classes.title}>PDF- How to know you are fit for a business</Typography>
                  <Typography variant = "h6" className= {classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Typography>
                </div>
            </div>
            <div className = {classes.buttonContainer}>
                <Button variant = "contained" className = {classes.buttons} >
                  Free Download the Guide
                </Button>
              </div>
            </Box>
            <div className = {classes.form}>
              <form >
                <Typography variant = "body1" className = {classes.formTitle}>
                  Download the guide by filling out this form
                </Typography>
                <div className = {classes.names}>
                  <FormControl className = {classes.first}>
                    <InputLabel>First Name</InputLabel>
                    <Input />
                  </FormControl>
                  <FormControl className = {classes.second}>
                    <InputLabel>Last Name</InputLabel>
                    <Input />
                  </FormControl>
                </div>
                <FormControl className = {classes.email}>
                    <InputLabel>Email</InputLabel>
                    <Input />
                </FormControl>
                <div className = {classes.secondFlex}>
                  <FormControl className = {classes.first}>
                    <InputLabel>Company Name</InputLabel>
                    <Input />
                  </FormControl>
                  <FormControl className = {classes.second}>
                    <InputLabel>Job Title</InputLabel>
                    <Input />
                  </FormControl>
                </div>
                <div className = {classes.thirdFlex}>
                  <FormControl className = {classes.first}>
                    <InputLabel>Field 1</InputLabel>
                    <Input />
                  </FormControl>
                  <FormControl className = {classes.second}>
                    <InputLabel>Field 2</InputLabel>
                    <Input />
                  </FormControl>
                </div>
              </form>
              <div className = {classes.buttonContainer}>
                <Button variant = "contained" className = {classes.buttons} >
                  Free Download the Guide
                </Button>
              </div>
            </div>
          </Container>
          <Description />
          <Author />
        </Container>
        
      </>
  );
}

export default App;
