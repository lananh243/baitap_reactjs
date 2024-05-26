import React from 'react';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  setEditTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
  toggleTaskCompletion: (taskId: number) => void;
  activeTab: string;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  setEditTask,
  deleteTask,
  toggleTaskCompletion,
  activeTab,
}) => {
  const filteredTasks = tasks.filter((task) => {
    if (activeTab === 'completed') {
      return task.completed;
    } else if (activeTab === 'incomplete') {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <ul className="list-group mb-0">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setEditTask={setEditTask}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

interface TaskItemProps {
  task: Task;
  setEditTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
  toggleTaskCompletion: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  setEditTask,
  deleteTask,
  toggleTaskCompletion,
}) => {
  const handleEdit = () => {
    setEditTask(task);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleComplete = () => {
    toggleTaskCompletion(task.id);
  };

  return (
    <li
      className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
      style={{ backgroundColor: '#f4f6f7' }}
    >
      <div>
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
        </span>
      </div>
      <div className="d-flex gap-3">
        <i className="fas fa-pen-to-square text-warning" onClick={handleEdit} />
        <i className="far fa-trash-can text-danger" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default TaskList;