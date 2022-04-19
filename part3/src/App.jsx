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

  const anecdoteArr= anecdotes.length
  
  const emptyArr = new Array(anecdoteArr).fill(0)//METHOD Changes all array elements from start to end index to a static value and returns the modified array

  const [selected, setSelected] = useState(0) //lms

  const [votes, setVotes]= useState(emptyArr)
  

  const handleClick=() =>{ //Mathy math to pick from the anecdote array
    let pickRandomArr = Math.floor(Math.random() * anecdoteArr) 
    setSelected(pickRandomArr)
  }

  const voteHandleClick= () => { // lms said to make a copy to update states stored in comlex data structures
    const copyVote= [... votes]
    copyVote[selected]+=1
    setVotes(copyVote)
  }

  const countingVotes = () => {
    let indexAndCount= 0
    for(let i=0; i <votes.length; i++) //looping through to keep track of votes
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
      </button> {/*Same as part2 */}

      <button onClick={handleClick}>next anecdotes
      </button>

      <h2>Anecdote with most votes
      </h2>

      <p>{anecdotes[countingVotes(0)]}
      </p>
    </>
  )
}
export default App