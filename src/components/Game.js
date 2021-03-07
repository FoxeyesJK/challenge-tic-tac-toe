import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { 
    Paper, 
    Button
} from '@material-ui/core'

import UserIcon from '@material-ui/icons/Close';
import AIIcon from '@material-ui/icons/RadioButtonUnchecked';

import { gameStyle } from '../style/gameStyle'

import Error from './Error'
import Popup from './Popup'
import { checkWinner } from './CheckWinner'

const WINNER_NAME = {
    "X": "USER",
    "O": "AI",
    "TIE": "TIE"
}

const LAST_MOVE = 9

const Game = ({ 
    classes,
    setIsLoading,
    setIsGameOn,
    setScore,
    score,
    isLoading
}) => {
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])

    const [error, setError] = useState("")
    const [open, setOpen] = useState(false)
    const [finalWinner, setFinalWinner] = useState("")
    const [move, setMove] = useState(0)

    const handleClick = (box, col, row) => {
        if(box === "") {
            const copy = [...board]
            copy[col][row] = "X"
            setBoard(copy)
        }
    }
    
    const postAIMove = async () => {
        const fetchOptions = {
            method: "POST",
            headers: { 
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("authToken")}`
            },
            body: JSON.stringify({board})
        }

        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/engine`, fetchOptions)
        const data = await res.json()
        const status = await res.status

        if (status === 200) {
            setBoard(data.board)
        }

        if (status === 500) {
            setError(data.error)
        }

        setIsLoading(false)
    }
  

    useEffect(() => {
        console.log('called')
        setMove(move+1)
        const winner = checkWinner(board)
        if (winner !== null) {
            const winnerName = WINNER_NAME[winner]
            setScore((prevState) => ({
                ...prevState,
                [winnerName]: score[winnerName] + 1
            }))

            setFinalWinner(winnerName)
            setOpen(true)
        } else {
            if(move%2 === 1 && move < LAST_MOVE) {
                console.log('in')
                setIsLoading(true)
                postAIMove()
            }
        }
    }, [board])

    return (
        <div className={classes.container}> 
            <table className={classes.table}>
                <tbody>
                {
                    board.map((row, colIndex) => 
                        <tr key={colIndex}>
                        {
                            row.map((box, rowIndex) => 
                                <td key={rowIndex} className={classes.boxContainer}>
                                    <Paper elevation={3}>
                                        <Button
                                            className={classes.button}
                                            disabled={isLoading}
                                            onClick={() => handleClick(box, colIndex, rowIndex)}
                                        >
                                        {
                                            box === "X" ? 
                                                <UserIcon className={classes.box} /> :
                                            box === "O" ? 
                                                <AIIcon className={classes.box} /> :
                                            ""
                                        }
                                        </Button>
                                    </Paper>
                                </td>
                            )
                        }
                        </tr>
                    )
                }
                </tbody>
            </table>
            {
                error && <Error error={error} />
            }
            {
                open && 
                <Popup 
                    open={open} 
                    winner={finalWinner}
                    setIsGameOn={setIsGameOn} 
                />
            }
        </div>
    )
}

Game.propTypes = {
    classes: PropTypes.object.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    setIsGameOn: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default withStyles(gameStyle)(Game)