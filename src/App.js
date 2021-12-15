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
import BlogPostDetails from './components/BlogPostDetails';
import CreateBlogPost from './components/CreateBlogPost';
import EditBlogPost from './components/EditBlogPost';
import ForgotPassword from './components/ForgotPassword';
import Profile from './components/Profile';

function App() {
    return (
        <div className="App">
            <UserHandler>
                <Header />
                <Router>
                    <Switch>
                        <Authorized path='/post/create'>
                            <CreateBlogPost />
                        </Authorized>
                        <Authorized path='/:slug/edit'>
                            <EditBlogPost />
                        </Authorized>
                        <Authorized path='/profile'>
                            <Profile />
                        </Authorized>
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/reset-password' component={ForgotPassword} />
                        <Route exact path='/:slug' component={BlogPostDetails} />
                        <Route exact path='/' component={Blog} />
                    </Switch>
                </Router>
                <Footer />
            </UserHandler>
        </div>
    );
}

export default App;
