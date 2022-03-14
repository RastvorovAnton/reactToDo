import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TaskComponent = ({ setTasks, task, setCurrentTask, index }) => {
  const { _id, isCheck, text } = task;
  const navigate = useNavigate();

  const onChangeCheckbox = () => {
    axios
      .patch(`http://localhost:8000/updateTask?id=${_id}`, {
        isCheck: !isCheck,
      })
      .then((res) => {
        setTasks(res.data.data);
      });
  };

  const deleteTask = () => {
    axios.delete(`http://localhost:8000/deleteTask?id=${_id}`).then((res) => {
      setTasks(res.data.data);
    });
  };

  const editTask = () => {
    setCurrentTask(task);
    navigate(`/edit/${_id}`);
  };

  return (
    <div className="ToDoContainer" key={`task-${index}`}>
      {!isCheck === true
        ? <div className='input-wrapper'>
          <input
            type="checkbox"
            onChange={() => onChangeCheckbox()}
            checked={isCheck}
          />
          <p>{text}</p>
          <img src='../Images/edit.png' alt="edit" onClick={() => editTask()} />
          <img src='../Images/delete.png' alt="delete" onClick={() => deleteTask()} />
        </div>
        : <div className='input-wrapper-done'>
          <input
            type="checkbox"
            onChange={() => onChangeCheckbox()}
            checked={isCheck}
          />
          <p>{text}</p>
          <img src='../Images/delete.png' alt="delete" onClick={() => deleteTask()} />
        </div>
      }
    </div>
  );
};

export default TaskComponent;