import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList'; 
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn the couse main topics'},
    {id: 'cg3', text: 'Help other students in the course Q&A'},
  ]);
  

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal)); works, but should only be used when a state doesn't depend on a previous state. 
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  }

  return (
    <div className="course-goals">
      <h2> Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

//the above is equivalent to the class below
// class App extends React.Component
// {
//   render()
//   {
//     return <h1 title = "this works"> Hi, <span>this</span> is React Js!</h1>;
//   }
// }

export default App;
