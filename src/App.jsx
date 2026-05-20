import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('teamup-tasks')) || []
    } catch {
      return []
    }
  })

  const [filter, setFilter]       = useState('all')
  const [editingTask, setEditingTask] = useState(null)
  const [toast, setToast]         = useState(null)

  useEffect(() => {
    localStorage.setItem('teamup-tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(t)
  }, [toast])

  function handleAdd(task) {
    setTasks(prev => [task, ...prev])
    setToast('✓ Task added successfully!')
  }

  function handleUpdate(updated) {
    setTasks(prev => prev.map(t => t.id === updated.id ? updated : t))
    setEditingTask(null)
    setToast('✓ Task updated!')
  }

  function handleDelete(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
    setToast('🗑 Task deleted.')
  }

  function handleToggle(id) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const total     = tasks.length
  const completed = tasks.filter(t => t.done).length
  const active    = total - completed
  const high      = tasks.filter(t => t.priority === 'High' && !t.done).length

  return (
    <div className="app-wrap">
      <Navbar />

      <main className="main-content">
        <div className="page-header">
          <div className="section-label">Project Dashboard</div>
          <h1 className="page-title">Manage Your Team Tasks</h1>
          <p className="page-sub">Assign, track, and complete tasks across your TeamUp AI project.</p>
        </div>

        <div className="stats-row">
          <div className="stat-chip">
            <span className="dot dot-blue"></span>
            <strong>{total}</strong>
            <span>Total</span>
          </div>
          <div className="stat-chip">
            <span className="dot dot-yellow"></span>
            <strong>{active}</strong>
            <span>Active</span>
          </div>
          <div className="stat-chip">
            <span className="dot dot-green"></span>
            <strong>{completed}</strong>
            <span>Completed</span>
          </div>
          <div className="stat-chip">
            <span className="dot dot-red"></span>
            <strong>{high}</strong>
            <span>High Priority</span>
          </div>
        </div>

        <TaskForm
          onAdd={handleAdd}
          editingTask={editingTask}
          onUpdate={handleUpdate}
          onCancelEdit={() => setEditingTask(null)}
        />

        <TaskList
          tasks={tasks}
          filter={filter}
          setFilter={setFilter}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onEdit={setEditingTask}
          total={total}
          active={active}
          completed={completed}
        />
      </main>

      <Footer />

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}

export default App