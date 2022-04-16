import React from 'react'

const Header= ({randomCourse}) => {
  return (
    <div>
    <h1> {randomCourse} </h1>
    </div>
  )
}

const Content= (p) => {
  return (
    <div>
      <Part printName={p.randomName1} printExercises={p.randomExercises1}/>
      <Part printName={p.randomName2} printExercises={p.randomExercises2}/>
      <Part printName={p.randomName3} printExercises={p.randomExercises3}/>
    {/* <p>{p.part1} {p.exercises1}</p>
    <p>{p.myPart2} {p.exercises2}</p> 
    <p>{p.myPart3} {p.exercises3}</p>  */}
    </div>
  )
}

const Part= (p) => {
  return (
    <div>
    <p>{p.printName} {p.printExercises} </p> 
    </div>
  )
}

const Totals= (p) => {
  return (
    <div>
    <p>Number of exercises {p.whereExercises1 + p.whereExercises2 + p.whereExercises3}</p>
    </div>
  )
}

const App = () => {
  const myCourse = {
    name: 'Half Stack application development',
    arrParts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  // const myCourse = 'Half Stack application development';
  // const arrParts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]


  // const myPart1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const myPart2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const myPart3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }
  

  return (
    <>
    <Header randomCourse={myCourse.name} />

    <Content randomName1={myCourse.arrParts[0].name} randomExercises1= {myCourse.arrParts[0].exercises} />
    <Content randomName2={myCourse.arrParts[1].name} randomExercises2= {myCourse.arrParts[1].exercises} />
    <Content randomName3={myCourse.arrParts[2].name} randomExercises3= {myCourse.arrParts[2].exercises} />
    <Totals whereExercises1={myCourse.arrParts[0].exercises} whereExercises2={myCourse.arrParts[1].exercises} whereExercises3={myCourse.arrParts[2].exercises} />

      {/* <Header randomCourse={myCourse} />

      <Content randomName1={arrParts[0].name} randomExercises1= {arrParts[0].exercises} />
      <Content randomName2={arrParts[1].name} randomExercises2= {arrParts[1].exercises} />
      <Content randomName3={arrParts[2].name} randomExercises3= {arrParts[2].exercises} />
      <Totals whereExercises1={arrParts[0].exercises} whereExercises2={arrParts[1].exercises} whereExercises3={arrParts[2].exercises} /> */}

      {/* <Content randomPart1={myPart1.name} randomExercises1= {myPart1.exercises} />
      <Content randomPart2={myPart2.name} randomExercises2= {myPart2.exercises} />
      <Content randomPart3={myPart3.name} randomExercises3= {myPart3.exercises} />
      <Totals whereExercises1={myPart1.exercises} whereExercises2={myPart2.exercises} whereExercises3={myPart3.exercises} /> */}
     
    </>
  );

}
export default App