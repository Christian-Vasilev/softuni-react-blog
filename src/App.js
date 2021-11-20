import Header from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';
import Authorized from './components/auth/Authorized';
import UserHandler from './components/auth/UserHandler';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import BlogPostDetails from './components/BlogPostDetails/BlogPostDetails';

function App() {
    return (
        <div className="App">
            <UserHandler>
                {/* <BlogPostDetails /> */}
                <Router>
                    <Header />
                        <Route exact path='/' component={Blog} />
                        <Route to='/login' />
                        <Route to='/register' />
                        
                        <Switch>
                            <Authorized path='/login'>
                                <Login />
                            </Authorized>
                            <Authorized path='/register'>
                                <Register />
                            </Authorized>
                        </Switch>
                    <Footer />
                </Router>
            </UserHandler>
        </div>
    );
}

export default App;
