import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chat from './Chat';
import Settings from './Settings';
import Navbar from './NavBar';
import Login from './Login';
import ChatHistory from './ChatHistory';

function App() {
  return (
    //router
    <Router>
        <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <div>
            <Navbar>
              <Switch>
                <Route exact path="/" component={Chat} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/history" component={ChatHistory} />
                
              </Switch>
            </Navbar>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

