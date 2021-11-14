import Header from './components/Header';
import Blog from './components/blog/Blog';
import Footer from './components/Footer';
import './App.css';
import Authenticate from './components/auth/Authenticate';
import AuthContext from './components/contexts/AuthContext';
import useAxios from './hooks/useAxios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
    const { data: user } = useAxios('/api/user');

    return (
        <div className="App">
            <AuthContext.Provider value={user}>
                <Header />
                <Router>
                    <Switch>
                        <Route exact path='/' component={Blog} />
                        <Route exact path='/login' component={Authenticate} />
                        <Route exact path='/register' component={Authenticate} />
                    </Switch>
                </Router>
                <Footer />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
