import './App.css'
import State from "./UseState/State.jsx";
import Reducer from "./UseReducer/Reducer.jsx";
import Effect from "./UseEffect/Effect.jsx";
import Ref from "./UseRef/Ref.jsx";
import EffectLayout from "./UseEffectLayout/EffectLayout.jsx";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle.jsx";

function App() {
  return(
      <div className="App">
        <ImperativeHandle/>
      </div>
  )
}
export default App
