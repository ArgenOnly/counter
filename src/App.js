import './App.css';
import {button} from './component/button/button'
import {Count} from './Component/Count/Count'

function App() {
  return (
    <div className="App">
      <Count counter='0'/>
      <button title='+'/>
      <button title='-'/>
      
    </div>
  );
}

export default App;
