import React from 'react';
import { posts } from './Loop';
import { NavLink } from 'react-router-dom'
import RightSide from './Components/RightSide'
import axios from 'axios';

export default class AllPosts extends React.Component {



    state = {
        posts: []

    }

    componentDidMount() {
        var url = `http://localhost:3001/category/:categoryID`
        axios.get(url)
            .then((res) => {
                debugger
                this.setState({ posts: res.data })
            })
            .catch((error) => {
                debugger
            })
    }

    render() {

        return (

            <div className={'allposts'}>


                <div>


                    <ul  >
                        {this.state.posts.map((ele, i) => {
                            return <li key={i}> <NavLink to={`/post/${ele._id}`}><h2>{ele.title}</h2><p>{ele.photoUrl} </p> <p> {ele.body}</p></NavLink> </li>
                        })}
                    </ul>

                </div>

            </div>
        )
    }
}