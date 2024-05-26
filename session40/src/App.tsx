import React, { useState, useEffect } from 'react';
import Header from './components/bt_session39/Header';
import Form from './components/bt_session39/Form';
import List from './components/bt_session39/List';
import Tab from './components/bt_session39/Tab';
import Modal from './components/bt_session39/Modal';
import { Task } from './components/types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setEditTask(null);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setShowDeleteModal(false);
  };

  const confirmDeleteTask = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete.id);
      setTaskToDelete(null); // Reset taskToDelete after deletion
    }
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <Header />
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <Form 
                    addTask={addTask} 
                    editTask={editTask} 
                    updateTask={updateTask} 
                  />
                  <Tab
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <List 
                    tasks={tasks} 
                    setEditTask={setEditTask} 
                    deleteTask={(task) => {
                      setTaskToDelete(task);
                      setShowDeleteModal(true);
                    }}
                    toggleTaskCompletion={toggleTaskCompletion} 
                    activeTab={activeTab}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showDeleteModal && taskToDelete && (
        <Modal 
          title="Xác nhận xóa" 
          message={`Bạn chắc chắn muốn xóa công việc "${taskToDelete.name}"?`} 
          confirmAction={confirmDeleteTask} 
          cancelAction={() => {
            setShowDeleteModal(false);
            setTaskToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default App;
