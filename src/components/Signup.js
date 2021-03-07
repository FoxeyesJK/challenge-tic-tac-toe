import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { 
    Button, 
    FormControl, 
    InputLabel,
    Input
} from '@material-ui/core'

import { signupStyle } from '../style/signupStyle'

import Error from './Error'

const Signup = ({ 
    classes,
    setIsLoggedIn,
    setIsLoading,
    setIsGameOn,
    isLoading,
}) => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        setIsLoading(true)
        tokenAuth()
    }

    const tokenAuth = async () => {
        const fetchOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        }
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth`, fetchOptions)
        const status = await response.status
        const data = await response.json()

        if (status === 200) {
            localStorage.setItem("authToken", data.token)
            setIsLoggedIn(true)
            setIsGameOn(true)
        }

        if (status === 500) {
            setError(data.error)
        }

        setIsLoading(false)
    }

    return (
        <div className={classes.container}> 
            <form onSubmit={handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">
                        Email
                    </InputLabel>
                    <Input 
                        id="email" 
                        onChange={event => setEmail(event.target.value)} 
                    />
                </FormControl>
                <Button 
                    type="Submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    disabled={isLoading || !email.trim()}
                >
                    {isLoading ? "...Loading" : "Play"}
                </Button>
            </form>
            {
                error && <Error error={error} />
            }
        </div>
    )
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    setIsGameOn: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default withStyles(signupStyle)(Signup)