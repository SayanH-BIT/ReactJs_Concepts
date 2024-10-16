// import logo from './logo.svg';
import './App.css';
import StateObj from './hooks_concept/useState_hook/StateObj';
/* 
import HookParent from './hooks_concept/useContext_hook/HookParent';
import ExampleCarComponent from './props_concept/props_drilling/ExampleCarComponent';
import Props1 from './props_concept/Props1';  
*/

/* 
import ParentState from './state_concept/ParentState';
import IndexPage from './CRUD operation/IndexPage';
import { Clock } from './state_concept/class_component/Clock'; 
*/

/* 
import UseState from './hooks_concept/useState_hook/UseState';
import UseEffect from './hooks_concept/useEffect_hook/UseEffect'; 
import UseRef from './hooks_concept/useRef_hook/UseRef';
import UseMemo from './hooks_concept/useMemo_hook/UseMemo';
import UseCallBack from './hooks_concept/useCallback_hook/UseCallBack';
*/

//import Map from './map_concept/Map';

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
      {/* <div className='state_concept'>
        <ParentState/>
      </div> */}
      {/* <div className='hook_concept'>
        <UseState/>
        <UseEffect/>
        <UseRef />
        <UseMemo/>
        <UseCallBack/>
        </div> */}
        <StateObj/>
      {/* <Map/> */}
      {/* <Clock/> */}
      {/* <IndexPage/> */}
    </div>
  );
}

export default App;
