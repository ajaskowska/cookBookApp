import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    App: {
        minHeight: '100vh',

    },
    container: {
        padding: '2rem',
        display: 'flex',
        margin: '0 auto'
    },
    toolbar: {
        color: '#fff'
    },

    icon: {
        margin: '1rem'
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    },
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        [theme.breakpoints.down("sm")]: {
            flexGrow: 1
        },
        fontSize: '30px'
    },
    searchForm:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    },

    search: {
        // width: '300px',

        margin: '1rem'
    },
    searchButton:{

    },
    ala: {
        display: "flex",

    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'

    },
    cardGrid: {
        padding: '3rem',

    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        // flexGrow: '1',
    },
    btnSeeMore: {

    },
    recipeImage: {
        paddingTop: '56.25%',
        height: '100%',
        width: '100%',
        display: 'flex',
    },


    footer: {
        padding: '3rem 0'
    }

}));
export default useStyles;