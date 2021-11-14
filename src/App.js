import Header from './components/Header';
import Blog from './components/blog/Blog';
import Footer from './components/Footer';
import './App.css';
import Authenticate from './components/auth/Authenticate';
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
                    <Route exact path='/' component={Blog} />
                    <Route exact path='/login' component={Authenticate} />
                    <Route exact path='/register' component={Authenticate} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
