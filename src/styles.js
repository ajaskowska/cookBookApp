import { makeStyles } from '@mui/styles'
import Image from './images/chef.png';


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
    banner: {
        backgroundImage: `url(${Image})`,
        maxWidth: '100%',
        height: 'auto',
        backgroundSize: 'cover',
        backgroundPosition: 'center'

    },
    quote: {
        margin: "3rem",
        padding: '1rem',
        textAlign: 'center',
        opacity: '0.5'

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
    textUnderSearchForm: {
       paddingTop: '2rem'
    },
    searchForm:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    },

    search: {
        width: '30%',

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
        borderRadius: '2px',
        width: '100%'
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
        padding: '3rem 0',
        backgroundColor: '#62A5A1'
    }

}));
export default useStyles;