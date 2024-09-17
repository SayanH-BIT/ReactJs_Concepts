// import logo from './logo.svg';
import './App.css';
import ExampleCarComponent from './props_concept/ExampleCarComponent';
import Props1 from './props_concept/Props1';

function App() {
  return (
    <div className="App">
      <Props1/>

      {/* fetching car name, car info to car component and showing it on the browser -> application of props */}
      <ExampleCarComponent/>
    </div>
  );
}

export default App;
