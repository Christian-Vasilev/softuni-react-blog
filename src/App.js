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
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

function App() {
    return (
        <div className="App">
            <UserHandler>
                <Router>
                    <Header />
                    <Switch>
                        <Authorized path='/post/create'>
                            <CreateBlogPost />
                        </Authorized>
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/reset-password' component={ForgotPassword} />
                        <Route exact path='/:slug' component={BlogPostDetails} />
                        <Route exact path='/:slug/edit' component={EditBlogPost} />
                        <Route exact path='/' component={Blog} />
                        <Route to='/post/create' />
                    </Switch>
                    <Footer />
                </Router>
            </UserHandler>
        </div>
    );
}

export default App;
