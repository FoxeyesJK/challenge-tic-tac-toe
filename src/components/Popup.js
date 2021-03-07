import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { 
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@material-ui/core'
import { popupStyle } from '../style/popupStyle'

const Popup = ({ 
    classes,
    open,
    winner,
    setIsGameOn,
}) => {
    return (
        <Dialog
            className={classes.container}
            disableBackdropClick={true}
            open={open}
        >
            <DialogTitle>
                {winner !== "TIE" ? `${winner} WIN!` : `${winner}!` }
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Try playing one more game!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => setIsGameOn(false)}
                >
                    PLAY AGAIN
                </Button>
            </DialogActions>
        </Dialog>
    )
}

Popup.propTypes = {
    open: PropTypes.bool.isRequired,
    setIsGameOn: PropTypes.func.isRequired
}

export default withStyles(popupStyle)(Popup)