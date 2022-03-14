import React from 'react';
import TaskComponent from '../TaskComponent/TaskComponent';

const ContainerTaskComponent = ({ tasks, setTasks, setCurrentTask }) => {
  tasks.sort((a, b) => a.isCheck - b.isCheck);

  return (
    <div className="Tasks-container">
      {tasks.map((task, index) => (
        <TaskComponent
          key={index}
          setTasks={setTasks}
          task={task}
          index={index}
          setCurrentTask={setCurrentTask}
        />
      ))}
    </div>
  );
};

export default ContainerTaskComponent;