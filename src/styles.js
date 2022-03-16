import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    App: {
        minHeight: '100vh',
        padding: '0',
        margin: '0',
        boxSizing: 'border-box'

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
        padding: '2rem',

    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: '1',
        padding: '0 1rem'
    },

    link: {
        textDecoration: 'none',
    },
    btnSeeMore: {
        padding: '0'
    },
    recipesImage: {
        paddingTop: '56.25%',
        display: 'flex',
        borderRadius: '2px'
    },
    recipeImg: {
        borderRadius: '5px',
        display: 'block',
        flexGrow: '0',
        width: '100%',
        height: 'auto',
        position: 'cover',
        align: 'center'
    },
    ingredients:{
        padding: '1rem'
    },
    method: {
        padding: '1rem'
    },
    wine: {
      padding: '1rem 0'
    },
    footer: {
        padding: '3rem 0'
    }

}));
export default useStyles;