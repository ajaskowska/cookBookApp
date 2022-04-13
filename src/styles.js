import { makeStyles } from '@mui/styles'
import Image from './images/chef.png';


const useStyles = makeStyles((theme) => ({
    App: {
        minHeight: '100%',
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        fontFamily: 'Montserrat", sans-serif'
    },

    container: {
        padding: '2rem',
        display: 'flex',
        margin: '0 auto'
    },

    icon: {
        margin: '1rem'
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-around"
    },
    root: {
        flexGrow: 1
    },
    banner: {
        backgroundImage: `url(${Image})`,
        maxWidth: '100%',
        height: '30vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: "relative",
        objectFit: "cover"

    },
    quote: {
        margin: "3rem",
        padding: '1rem',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.6',
        position:"absolute",
        bottom: '0%',
        fontWeight: '600'


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
        margin: '2rem',
    },
    searchButton:{

    },

    card: {
        height: '100%',
        display: 'flex',
        flexShrink: '1',
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
        borderRadius: '1rem',
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
    about:{
        textAlign: 'center',
        listStyle: 'none',
        lineHeight: '1.5'
    },




}));
export default useStyles;