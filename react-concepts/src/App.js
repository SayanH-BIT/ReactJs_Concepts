// import logo from './logo.svg';
import './App.css';
import HookParent from './hooks_concept/useContext_hook/HookParent';
import ExampleCarComponent from './props_concept/props_drilling/ExampleCarComponent';
import Props1 from './props_concept/Props1';

function App() {
  return (
    <div className="App">
      <div className='props_concept'>
        {/* Props application
      <Props1/>
      {/* fetching car name, car info to car component and showing it on the browser -> application of props
      <ExampleCarComponent/> */}

        {/* useContext() hook application 
      <HookParent />
      */}

        {/* useContext() hook application 
        <HookParent/>
        */}
      </div>
      <div></div>
    </div>
  );
}

export default App;
