import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Signup from './components/Signup'
import Game from './components/Game'

import { withStyles } from '@material-ui/core/styles'
import { appStyle } from './style/appStyle'

import Score from './components/Score'

const App = ({ classes }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isGameOn, setIsGameOn] = useState(false)
  const [score, setScore] = useState({
    USER: 0,
    AI: 0,
    TIE: 0
  })


  useEffect(() => {
    if (isLoggedIn)
      setIsGameOn(true)
  }, [isGameOn])

  return (
    <div className={classes.rootContainer}>
      <div>
        <h1 className={classes.header}>
          Tic Tac Toe
        </h1>
        {
          !isLoggedIn &&
          <Signup 
            setIsLoggedIn={setIsLoggedIn} 
            setIsLoading={setIsLoading}
            setIsGameOn={setIsGameOn}
            isLoading={isLoading}
          />  
        }
        {
          isGameOn && 
          <div>
          <Game 
            setIsLoading={setIsLoading}
            setIsGameOn={setIsGameOn}
            setScore={setScore}
            score={score}
            isLoading={isLoading}
          />
          <Score
            score={score}
          />
          </div>
        } 
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(appStyle)(App);
