export const gameStyle = ({
  palette,
  spacing
}) => {
  return {
    container: {
      margin: '0 auto',
      maxWidth: '506px'
    },
    button: {
      width: 150,
      height: 150,
      backgroundColor: palette.secondary.main,
      cursor: 'pointer'
    },
    table: {
      overflow: 'hidden',
      display: 'inline-block',
      padding: 0,
      margin: 0
    },
    boxContainer: {
      position: 'relative',
      padding: spacing(1),
      '&:hover::before': {
        backgroundColor: '#FFFFB1',
        content: '""',
        height: '100%',
        left: '-5000px',
        position: 'absolute',
        top: 0,
        width: '10000px',
        zIndex: '-2'
      },
      '&:hover::after': {
        backgroundColor: '#FFFFB1',
        content: '""',
        height: '10000px',
        left: '0',
        position: 'absolute',
        top: '-5000px',
        width: '100%',
        zIndex: '-1'
      }
    },
    box: {
      width: '100%',
      height: '100%'
    }
  }
}
  