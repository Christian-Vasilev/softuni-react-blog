import Header from './components/Header';
import Blog from './components/blog/Blog';
import Footer from './components/Footer';
import './App.css';
import AuthContext from './components/contexts/AuthContext';
import useAxios from './hooks/useAxios';
import Authorized from './components/auth/Authorized';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
    const { data: user, isPending } = useAxios('/api/user');

    return (
        <div className="App">
            <AuthContext.Provider value={{user, isPending}}>
                <Header />
                <Router>
                    <Route to='/login' />
                    <Route to='/register' />

                    <Switch>
                        <Route exact path='/' component={Blog} />
                        <Authorized path='/login'>
                            <Login />
                        </Authorized>
                        <Authorized path='/register'>
                            <Register />
                        </Authorized>
                    </Switch>
                </Router>
                <Footer />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
