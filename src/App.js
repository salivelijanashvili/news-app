import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from './pages/Main';
import UsaToday from './pages/UsaToday';
import CNN from './pages/CNN';
import BBC from './pages/BBC';

import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <NavBar />
        <ul>
           <li>
              <Link to='/'></Link>
          </li> 
              <Link to='/usa-today'> </Link>
              <Link to='/cnn'> </Link>
        </ul>
      </header>
      <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/usa-today/' component={UsaToday} />
          <Route   path='/cnn/' component={CNN}/> 
          <Route   path='/bbc-news/' component={BBC}/> 
      </Switch>
   </div>
 </Router>
  );
}

export default App;
