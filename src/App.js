
import './App.css';
import { FormikForm } from './components/FormikForm/FormikForm';


function App() {
console.log("app render")


  return (
    <div className="App">
      <header className="App-header">
        <FormikForm />
      </header>
    </div>
  );
}

export default App;
