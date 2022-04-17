import React, { useState } from 'react'

const Header= ({paramHeader}) => {
  return (
    <div>
    <h1> {paramHeader}</h1>
    </div>
  )
}

const Button = ({onClick,blah}) => (
  <button onClick={onClick}>{blah}</button>
)

const Content = ({textPrint, numOfClicks}) => {
  return (
    <div>{textPrint} {numOfClicks}</div>
  )
}

const Display = ({displayClicks}) => {

  const displayText ={
    goodText:'Good',
    neutralText:'Neutral',
    badisplayText:'Bad',
    allText: 'All',
    averageText: 'Average',
    positiveText: 'Positive',
  }
  const total = displayClicks.goodClick + displayClicks.neutralClick + displayClicks.badClick

  const constAverage = (((displayClicks.goodClick * 1 + displayClicks.badClick * -1) / total).toFixed(3))

  const constPositive = (displayClicks.goodClick * (100/total)).toFixed(3)

  return (
    <div>
      <Content textPrint={displayText.goodText} numOfClicks={displayClicks.goodClick} />

      <Content textPrint={displayText.neutralText} numOfClicks={displayClicks.neutralClick} />

      <Content textPrint={displayText.badisplayText} numOfClicks={displayClicks.badClick} />

      <Content textPrint={displayText.allText} numOfClicks={total} />

      <Content textPrint={displayText.averageText} numOfClicks={constAverage} />

      <Content textPrint={displayText.positiveText} numOfClicks={constPositive} />
    </div>
  )
}

const App = () => {
  
  const constHeader = {
    header1: 'Give Feedback',
    header2: 'Statistics'
  }

  const [displayClicks, setClicks] = useState({
    goodClick: 0,
    neutralClick: 0,
    badClick: 0
  })
 
  const constText= {
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
      
      <Display displayClicks={displayClicks} />
    </div>
  )
}

export default App