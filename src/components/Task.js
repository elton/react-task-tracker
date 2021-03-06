import { FaTimes } from 'react-icons/fa';
const Task = ({ task, onDelete }) => {
  return (
    <div className='bg-gray-100 m-1 px-5 py-1 cursor-pointer'>
      <h3 className='flex items-center justify-between'>
        {task.text}
        <FaTimes
          className='text-red-500 cursor-pointer'
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p className='text-sm text-gray-600'>{task.day}</p>
    </div>
  );
};

export default Task;
