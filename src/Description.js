import React from 'react';
import {Typography, Box, Container,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles(() => ({
    title: {
        color: "#737373",
        marginBottom: "3%",
        fontWeight: "500"

    },
    box: {
        border: "1px solid #707070",
        width: "100%",
        marginBottom: "5%",
        background: "#FFFFFF 0% 0% no-repeat padding-box"
    },
    texts: {
        padding: "1.2%",
        color: "#737373"
    },
    buttons: {
        minWidth: "50%",
        background: "#0380A7 0% 0% no-repeat padding-box",
        color: "white",
        borderRadius: "30px",
        padding: "1.2%",
        position: "relative",
        left: "25%",
        margin: "3% 0 5% 0",
        '&:hover': {
            color: "black"
        },
    }
}))

const Description= () => {
    const classes = useStyle();
    return (
        <>
            <Container>
                <Typography variant= "h5" className = {classes.title}>
                What You'll Get in this PDF
                </Typography>
                <Box className = {classes.box}>
                    <Typography className = {classes.texts}>Introduction</Typography>
                    <Typography className = {classes.texts}>As mobile apps and websites continue to play an ever-increasing role in our daily lives, the importance of these digital products' design also increases. Understand the foundations of product design and learn about the crucial role UX writers play in creating today's digital products.</Typography>
                    <Typography className = {classes.texts}>As mobile apps and websites continue to play an ever-increasing role in our daily lives, the importance of these digital products' design also increases.</Typography>
                </Box>
                <div className = {classes.buttonContainer}>
                    <Button variant = "contained" className = {classes.buttons} >
                        Free Download the Guide
                    </Button>
                </div>
            </Container>
            
        </>
    )
}

export default Description;