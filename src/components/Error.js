import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { 
    Snackbar,
    Button
} from '@material-ui/core'

const Error = ({ classes, error }) => {
    const [open, setOpen] = useState(true)

    return (
        <Snackbar
            open={open}
            message={error}
            action={
                <Button 
                    color="secondary" 
                    size="small"
                    onClick={() => setOpen(false)} 
                >
                    Close
                </Button>
            }
        />
    )
}

Error.propTypes = {
    classes: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired
}

export default Error