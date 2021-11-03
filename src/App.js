import logo from './logo.svg';
import Header from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Blog />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
