import React from 'react'

const Header= (p) => {
  return (
    <div>
    <h1> {p.course} </h1>
    </div>
  )
}

const Content= (p) => {
  return (
    <div>
      <Part part={p.part1} exercises={p.exercises1}/>
      <Part part={p.part2} exercises={p.exercises2}/>
      <Part part={p.part3} exercises={p.exercises3}/>
    {/* <p>{p.part1} {p.exercises1}</p>
    <p>{p.part2} {p.exercises2}</p> 
    <p>{p.part3} {p.exercises3}</p>  */}
    </div>
  )
}

const Part= (p) => {
  return (
    <div>
    <p>{p.part} {p.exercises} </p> 
    </div>
  )
}

const Totals= (p) => {
  return (
    <div>
    <p>Number of exercises {p.exercises1 + p.exercises2 + p.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using p to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  

  return (
    <>
      <Header course={course} />
      <Content part1={part1} exercises1= {exercises1} />
      <Content part2={part2} exercises2= {exercises2} />
      <Content part3={part3} exercises3= {exercises3} />
      <Totals exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
     
    </>
  );

}
export default App