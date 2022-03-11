import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    App: {
        minHeight: '100vh'
    },
    container: {
        // padding: '2rem',
        // boxSizing: 'border-box',
        display: 'flex',
        margin: '0 auto'
    },
    icon: {
        margin: '1rem'
    },
    searchForm:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    },

    search: {

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
        flexGrow: '1',
    },
    btnSeeMore: {

    },

    footer: {
        padding: '3rem 0'
    }

}));
export default useStyles;