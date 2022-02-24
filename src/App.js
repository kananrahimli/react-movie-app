// import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Navigation from "./components/layout/navigation";
import Home from "./pages/Home";
function App() {
  return (
    <div className="app">
       <Navigation></Navigation>
       <Home></Home>
    </div>
  );
}

export default App;
