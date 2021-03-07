import { useState } from 'react';
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert(`Please enter a name of task`);
    }

    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <div>
      <form className='mb-10' onSubmit={onSubmit}>
        <div className='my-5 mx-0'>
          <label className='block'>Task</label>
          <input
            type='text'
            placeholder='Add Task'
            className='w-full h-10 m-1 py-1 px-2 text-lg border-b border-cyan-700'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='my-5 mx-0'>
          <label className='block'>Day & Time</label>
          <input
            type='text'
            placeholder='Add Day & Time'
            className='w-full h-10 m-1 py-1 px-2 text-lg border-b border-cyan-700'
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className='my-5 mx-0 flex items-center justify-between'>
          <label className='flex-1'>Set Reminder</label>
          <input
            type='checkbox'
            className='h-5'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input
          type='submit'
          value='Save Task'
          className='p-2 bg-cyan-700 w-full text-white rounded'
        />
      </form>
    </div>
  );
};

export default AddTask;
