import React from 'react';
import {Container, Typography, CssBaseline, Card, CardMedia, CardContent, Avatar, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles(() => ({
    container: {
        position: "relative"
    },
    title: {
        color: "#737373",
        marginBottom: "3%",
        fontWeight: "500"

    },
    cardContainer: {
        marginBottom: "3%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2%",
        background: "transparent linear-gradient(180deg, #966BC2 0%, #437BBE6E 100%) 0% 0% no-repeat padding-box",
        ['@media (max-width: 500px)']: {
            flexDirection: "column"
        }
    },
    imageContainer: {
        flexBasis: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 2% 0 2%",

    },
    image: {
        height: "120px",
        width: "120px",
        ['@media (max-width: 500px)']: {
            height :"150px",
            width: "150px",
        }
    },
    content: {
        ['@media (max-width: 850px)']: {
            marginLeft: "3%"
        }
    },
    texts: {
        color: "white",
        fontSize: "20px",
    },
    box: {
        width: "150px",
        height: "130px",
        marginBottom: "5%",
        background: "transparent linear-gradient(180deg, #D793DAAB 0%, #1D7FBB 100%) 0% 0% no-repeat padding-box",
        margin: "0 0 0 4%",
        position: "relative",
        bottom: "100px",
        // transform: "matrix(1, 0.07, -0.07, 1, 0, 0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ['@media (max-width: 500px)']: {
            position: "initial",
            width: "100%",
            transform: "none",
            margin: "0",
            height: "80px",
            marginBottom: "8%"
        }
    },
    boxText: {
        color:"white",
    }
}))

const Author = () => {
    const classes = useStyle();
    return(
        <>
            <CssBaseline />
            <Container className = {classes.container}>
                <Typography variant = "h5" className= {classes.title}>
                    A note from the Author
                </Typography>
                <Card item className = {classes.cardContainer}>
                    <CardMedia className = {classes.imageContainer}>
                        <Avatar src= "https://lh3.googleusercontent.com/pw/ACtC-3dshbdyBk2qRWx0zvXStUwO2c4yx-0AVCfAwM3_pMgM2KKniXyyZ5akm6IQq2Rn7z3XCRjOEELQHAePcv0P8suCaB_hxPVeigo5bS4jXu36akZGu11gey35NHF-bs9PDxCkP4urO6gOifA7uVuoqq_Y=s903-no?authuser=0" className = {classes.image}/>
                    </CardMedia>
                    <CardContent className = {classes.content}>
                        <Typography variant = "body1" className = {classes.texts}>
                            I enrolled in the course to get help to transition from Copywriting to UX Writing. I had plenty of experience in the digital field, but a lack of knowledge about the UX Writing processes. So this hands-on methodology worked great with me. Thanks to Yuval.
                        </Typography>
                    </CardContent>
                </Card>
                <Box className = {classes.box}>
                    <Typography className = {classes.boxText}>Sohan Haidiar</Typography>
                    <Typography className = {classes.boxText}>Author</Typography>
                </Box>
            </Container>
        
        </>
    )
}

export default Author;