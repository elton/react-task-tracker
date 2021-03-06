import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Tasks';
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
  ]);
  return (
    <div className='max-w-lg my-8 mx-5 overflow-auto min-h-full border-cyan-600 border rounded p-8'>
      <Header />
      <Task tasks={tasks} />
    </div>
  );
};

export default App;
