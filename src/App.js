import logo from './logo.svg';
import './App.css';
import DataTable from './components/DataTable'

function App() {
  const data = [
    { id: 1, name: 'Thor', age: 10733 },
    { id: 2, name: 'Hulk', age: 43 },
    { id: 3, name: 'Iron Man', age: 41 },
    { id: 4, name: 'Hawk Eye', age: 39 },
    { id: 5, name: 'Spiderman', age: 19 },
    { id: 6, name: 'Black Widow', age: 28 },
    { id: 7, name: 'Captain America', age: 174 },
    { id: 8, name: 'Doctor Strange', age: 53 },
  ];
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple <code>DataTable</code> component with <code>memoization</code>.
        </p>
        <DataTable data={data} columns={columns} rowsPerPage={5}/>
      </header>
    </div>
  );
}

export default App;
