import React, { useState } from 'react'

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const anecdoteArr= anecdotes.length // This sets the 'ancedote' array length and turns the vairable into a number. The 'anecdoteArr' is used to make a new array called 'emptyArr'

  const emptyArr = new Array(anecdoteArr).fill(0)// you got the length of 'anecdotes', you passed it to 'new Array' to make another array with the same length, and you used '.fill()' METHOD to fill it up with 0s. The .fill() METHOD changes all array elements. 'emptyArr'is now a variable holding an array of all 0s. This will be an argument given to 'useState()' and makes the default value for the state when the component is first created

  const [selected, setSelected] = useState(0) // this is for the currently displayed anecdote. 'selected' is used to as the index value to display and anecdote which is the current state while the second value 'setSelected' is a method used for updating the state. The argument to 'setSelected' can either be the new state value or a callback function that takes the old state as parameter

  const [votes, setVotes]= useState(emptyArr) // 'emptyArr' is the argument to 'useState()' because it is the value that you want to use when the component is first created. OPTIONAL const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)); this would remove line 17 and consolidate it into line 21. 'votes' hold the state and 'emptyArr' is its starting value, then 'setVotes' is a function to change 'votes' to a new state and now when its called 'votes' holds the new value.

  const nextHandleClick=() =>{ //Mathy math to pick from the 'anecdotes' array(line5). It is on line 59. This function performs everything needed to pick a random index from the 'anecdotes' array(line5)
    let pickRandomArr = Math.floor(Math.random() * anecdoteArr) // this is not a function, it is a variable and the declared value isfunction adjacent stuff cause of the METHODS
    setSelected(pickRandomArr) // 'pickRandomArr' is the arguement to 'setSelected' that updates the state
  }

  const voteHandleClick= () => { // lms said to make a copy to update states stored in comlex data structures
    const copyVote= [... votes]// creates a new array and fills it with the contents of votes
    copyVote[selected]++ //'selected' can be used anywhere, its the index of the currently display anecdote and is matching the votes to the ancedote, the ++ adds 1 to the vote which is currently displayed
    setVotes(copyVote)
  }

  const countingVotes = () => {
    let indexAndCount= 0
    for(let i=0; i <votes.length; i++) //looping through to find largets vote. votes is an array, function stops when it reaches the end of array (votes.length)
    {
      if(votes[indexAndCount]<votes[i]){
        indexAndCount=i
      }
    }
    return indexAndCount
  }

  return ( //trying to keep it all in one place. I dont need multiple components for the app to refernce to if I just use the elements in the return to spit out the text 
    <>
      <h2>Anecdote of the day
      </h2> {/*html element that spits out on browser*/}

      <p>{anecdotes[selected]}
      </p>

      <p>has {votes[selected]} votes
      </p>
      
      <button onClick={voteHandleClick}>vote
      </button> {/*Same as part2 */} {/* onCLick(is an event listener) has the function 'voteHandleClick' ready, when clicked it calls the 'voteHandleClick'(which is the event handler) function.*/}

      <button onClick={nextHandleClick}>next anecdotes
      </button> {/* onCLick(is an event listener) has the function 'nextHandleClick' ready, when clicked it calls the 'nextHandleClick'(which is the event handler) function.*/}

      <h2>Anecdote with most votes
      </h2>{/*html element that spits out on browser*/}

      <p>{anecdotes[countingVotes(0)]}
      </p>
    </>
  )
}
export default App