import { Header } from './components/Header/Header';
import { TodoForm } from './components/TodoForm/TodoForm';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container pt-100">
            <TodoForm />
            <TodoList />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
