import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { 
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell
} from '@material-ui/core'
import { scoreStyle } from '../style/scoreStyle'

const Score = ({ 
    classes,
    score
}) => {
    return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="score table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.text}>USER</TableCell>
              <TableCell className={classes.text}>AI</TableCell>
              <TableCell className={classes.text}>TIE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell className={classes.text}>{score.USER}</TableCell>
            <TableCell className={classes.text}>{score.AI}</TableCell>
            <TableCell className={classes.text}>{score.TIE}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    )
}

Score.propTypes = {
    classes: PropTypes.object.isRequired,
    score: PropTypes.object.isRequired
}

export default withStyles(scoreStyle)(Score)