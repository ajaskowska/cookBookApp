import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '2rem',
        boxSizing: 'border-box',
        backgroundColor: 'paper'
    },
    icon: {
        margin: '1rem'
    },

    searcher: {
        margin: '1rem'
    },
    btnGo: {
        margin: '3rem'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'

    },
    cardGrid: {
        padding: '2rem'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: '1'
    },
    footer: {
        backgroundColor: 'paper',
        padding: '3rem 0'
    }

}));
export default useStyles;