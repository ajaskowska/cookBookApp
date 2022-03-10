import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    App: {
        minHeight: '100vh'
    },
    container: {
        padding: '2rem',
        boxSizing: 'border-box',
        display: 'flex'
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
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'

    },
    cardGrid: {
        padding: '2rem',
        display: 'flex'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: '1'
    },
    footer: {
        padding: '3rem 0'
    }

}));
export default useStyles;