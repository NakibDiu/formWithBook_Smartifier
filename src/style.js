import {makeStyles} from '@material-ui/styles';

var url = "https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80";

const useStyle = makeStyles(() => ({
    mainContainer: {
        minWidth: "100%",
        minHeight: "700px",
        display: "flex",
        justifyContent: "space-between",
        padding: "5%",
        marginBottom: "65px",
        ['@media (max-width: 600px)']: {
            flexDirection: "column",
        }
    },
    box: {
        flexBasis: "55%",
        minHeight: "600px",
        marginRight: "3%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ['@media (max-width: 600px)']: {
            marginBottom: "5%"
        }
    },
    book: {
        flexBasis: "80%",
        background: `url(${url})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
    },
    text: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent linear-gradient(180deg, #966FC36E 0%, #4B3862 100%) 0% 0% no-repeat padding-box",
        minHeight:"100%",
        padding: "3%"
    },

    title: {
        color: "white",
        font: "normal normal 32px/22px",
        fontWeight: "500",
        marginBottom: "5%",
        fontSize: "32px"
    },
    description: {
        color: "white",
        font: "normal normal 300 25px/50px",
        lineHeight: "1.5em",
        fontSize: "25px",
        fontWeight: "300"
    },
    form: {
        flexBasis: "50%",
        minHeight: "650px",
        padding: "2%",
        background: "#EBEBEB 0% 0% no-repeat padding-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    formTitle: {
        color: "#737373",
        margin: "0 0 8% 0",
        fontSize: "24px"
    },
    names: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 0 8% 0"
    },
    first: {
        flexBasis: "50%",
        marginRight: "3%"
    },
    second: {
        flexBasis:"50%",
    },
    email: {
        minWidth: "100%",
        margin: "0 0 8% 0"
    },
    secondFlex: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 0 8% 0"
    },
    thirdFlex: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 0 8% 0"
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttons: {
        minWidth: "80%",
        background: "#0380A7 0% 0% no-repeat padding-box",
        color: "white",
        borderRadius: "30px",
        padding: "3%",
        '&:hover': {
            color: "black"
        },
    }
   
}));

export default useStyle;