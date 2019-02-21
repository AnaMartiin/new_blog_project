import React, { Component } from 'react';
import Register from './Register'
import Login from './Login'
import SecretComp from './SecretComp'
import RightSide from './Components/RightSide'
import NavBarNPM from 'reactjs-navigation'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Logout from './Logout';
import Homepage from './Homepage';
// import Categories from './Components/categories';
import { categories } from './Loop';
import CategoriesMain from './Components/CategoriesMain';
import Category from './Components/Category';
import CreatePost from './Components/CreatePost';
import AllPosts from './AllPosts';
import SinglePostPage from './Components/SinglePostPage';
import Comments from './Components/Comment';
import AboutUs from './Components/AboutUs';


class App extends Component {

  state = {
    isLoggedIn: false,
    // category: categories.map(ele => ele.name)
  }
  componentDidMount() {
    var token = localStorage.getItem('authToken')
    token ? this.setState({ isLoggedIn: true }) : null

  }
  isLoggedIn = (bool) => {
    this.setState({ isLoggedIn: bool })
  }
  render() {
    let { isLoggedIn } = this.state
    return (
      <div>
        <Router>
          <div>

            <NavBarNPM


              //background='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(45,166,103,1) 0%, rgba(50,199,212,1) 51%, rgba(45,166,103,1) 100%)'
              pages={isLoggedIn ? ['logout', 'secret'] : ['/', 'categories', 'Diets', 'About', 'register', 'login']}
            />
            <Route exact path='/Diets'
              component={AllPosts} />

            <Route exact path='/About'
              component={AboutUs} />

            <Route
              path='/register'
              component={Register}
            />
            <Route
              path='/login'
              render={
                () => (
                  <Login isLoggedIn={this.isLoggedIn} />
                )
              }
            />
            <Route
              path='/secret'
              component={SecretComp}
            />
            <Route
              path='/logout'
              render={
                () => (
                  <Logout isLoggedIn={this.isLoggedIn} />
                )
              } />
            <Route exact path='/'
              component={Homepage}
            />

            <Route path="/categories"
              component={CategoriesMain}
            />
            <Route path="/category/:id"
              component={Category}
            />
            <Route path='/post/create/:categoryID'
              component={CreatePost}
            />
            <Route exact path='/post/:_id'
              component={SinglePostPage}
            />




          </div>
        </Router>

      </div>



    );
  }
}

export default App;
