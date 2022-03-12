import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
import FirstTry from './FirstTry';
import Buttons from './Buttons';
import Counter from './Counter';
import InfoListDetails from './InfoListDetails';
import AddContact from './AddContact';
import NotFound from './NotFound';


function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/firstTry">
            <FirstTry/>
          </Route>
          <Route path="/create">
            <AddContact/>
          </Route>
          <Route path="/buttons">
            <Buttons/>
          </Route>
          <Route path="/counter">
            <Counter/>
          </Route>
          <Route path="/infos/:id">
            <InfoListDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
