import React from 'react'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <div className='app-root' style={{ backgroundColor: "#ebfcff" }}>
      <TodoList />
    </div>
  )
}

export default App
