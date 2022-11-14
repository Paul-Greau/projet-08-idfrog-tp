
// CSS VARS
import palette from '../../assets/styles/_vars.scss'

export const projectCollectStyles = {

    btnPrimary: {
        fontSize: 14,
        backgroundColor: palette.primary,
        border: '2px solid palette.primary',
        color: '#ffffff',
        fontWeight: 700,
        textTransform: 'none',
        borderRadius: '50px',
        padding: '5px 10px',
        '&:hover': {
          color: '#5de4d5',
        },
      },

    btnSecondary: {
        fontSize: 14,
        backgroundColor: '#d9d9d9',
        border: '2px solid #d9d9d9',
        color: '#ffffff',
        textTransform: 'none',
        borderRadius: '50px',
        padding: '5px 10px',
        '&:hover': {
          backgroundColor: '#f5f5f5',
          color: '#30394e',
        },
      },

    card:{
        maxWidth: '100%',
        mt: 4,
        mx:4,
        textAlign: 'center',
        m: { xl: 2, md: 2, xs: 2 }
    },

    carAction:{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 1,
        p: 1,
    }
    

};