import {Route,Switch} from 'react-router-dom';
import './App.css';
import Search from './pages/Search';


function App() {
 return (
    <div>
        <Switch>               
            <Route exact path="/" component={Search} />
        </Switch>
    </div>
  
 );
}

export default App;
