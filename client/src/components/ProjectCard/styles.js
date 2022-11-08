import palette from '../../assets/styles/_vars.scss'

export const projectCardStyles = {

    summary:{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
    },

    cardAction: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        padding: '15px',
    },

    btnPrimary:{
        fontSize: 14,
        backgroundColor: palette.primary,
        border: `2px solid ${palette.primary}`,
        color: '#ffffff',
        fontWeight: 700,
        textTransform: 'none',
        borderRadius: '50px',
        padding: '5px 10px',
        '&:hover': {
          color: palette.primary,
        },
    },

    btnSecondary:{
        fontSize: 14,
        backgroundColor: palette.info,
        border:  `2px solid ${palette.info}`,
        color: palette.secondary,
        textTransform: 'none',
        borderRadius: '50px',
        padding: '5px 10px',
        '&:hover': {
          backgroundColor: '#f5f5f5',
          color: palette.secondary,
        },
    },
   
  };
