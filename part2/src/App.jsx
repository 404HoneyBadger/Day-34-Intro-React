import React, { useState } from 'react'

const Header= ({paramHeader}) => { // Simple enough
  return (
    <div>
    <h1> {paramHeader}</h1>
    </div>
  )
}

const Button = ({onClick,blah}) => ( // Event Handler variable referenced in 'App'  and text
  <button onClick={onClick}>{blah}</button>
)

const Content = ({textPrint, numOfClicks, percent}) => { //what prints out under the App component, seperate component from the 'Display' component I STILL DONT KNOW, its ok to use parameters that wont be used in every 'Display' return
  return (
    <div>{textPrint} {numOfClicks} {percent} </div>
  )
}

const Display = ({displayClicks}) => {

  const displayText ={ //Create the text
    goodDisplayText:'Good',
    neutralDisplayText:'Neutral',
    badDisplayText:'Bad',
    allText: 'All',
    averageText: 'Average',
    positiveText: 'Positive',
  }

  const percent= '%' // create its own  variable cause the return gets rejects if I reference 'displayText.(whatever)' twice in the same line... 

  const total = (displayClicks.goodClick + displayClicks.neutralClick + displayClicks.badClick) // do the mathy math

  const constAverage = ((displayClicks.goodClick * 1 + displayClicks.badClick * -1) / total).toFixed(3) // more mathy math

  const constPositive = ((displayClicks.goodClick * (100/total)).toFixed(3)) //math..

  return ( // put it together for 'Content' component parameters
    <div>
      <Content textPrint={displayText.goodDisplayText} numOfClicks={displayClicks.goodClick} />

      <Content textPrint={displayText.neutralDisplayText} numOfClicks={displayClicks.neutralClick} />

      <Content textPrint={displayText.badDisplayText} numOfClicks={displayClicks.badClick} />

      <Content textPrint={displayText.allText} numOfClicks={total} />

      <Content textPrint={displayText.averageText} numOfClicks={constAverage} />

      <Content textPrint={displayText.positiveText} numOfClicks={constPositive} percent={percent} /> {/* DO NOT REFERNCE THE SAME OBJECT TWICE IT WILL REJECT  */}
    </div>
  )
}

const App = () => {
  
  const constHeader = { // Simple enough
    header1: 'Give Feedback',
    header2: 'Statistics'
  }

  const [displayClicks, setClicks] = useState({ // when state is updated the component re-renders
    goodClick: 0,
    neutralClick: 0,
    badClick: 0
  })

  const constText= { // Haven't lost me yet
    goodButton: 'Good',
    neutralButton: 'Neutral',
    badButton: 'Bad'
  }

  const handleGoodClick = () => setClicks({ ...displayClicks, goodClick: displayClicks.goodClick + 1
  })

  const handleNeutralClick = () => setClicks({ ...displayClicks, neutralClick: displayClicks.neutralClick + 1
  })

  const handleBadClick = () => setClicks({ ...displayClicks, badClick: displayClicks.badClick + 1
  })

  return (
    <div>
      <Header paramHeader= {constHeader.header1} />
      
      <Button onClick=  {handleGoodClick} blah= {constText.goodButton} />
      
      <Button onClick={handleNeutralClick} blah= {constText.neutralButton} />
      
      <Button onClick={handleBadClick} blah= {constText.badButton} />
      
      <Header paramHeader= {constHeader.header2} /> 
      
      <Display displayClicks={displayClicks} /> {/* Entire component in displayClicks parameter */}
    </div>
  )
}

export default App