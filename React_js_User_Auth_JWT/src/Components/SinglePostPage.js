import React from 'react';
import { posts, comments } from '../Loop';
import Comment from './Comment'


export default class SinglePostPage extends React.Component {


    state = {
        body: '',
        owner: '',
        postID: '',
        _id: '',

    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    handleSubmit = e => {
        let { body } = this.state
        let postID = Number(this.props.postID)
        e.preventDefault()
        comments.push({
            body: body,
            owner: '',
            postID: postID,
            _id: ''

        })
    }

    render() {

        var myPosts = posts
        var my_comments = comments;

        var index = myPosts.findIndex(ele => ele.categoryID == this.props.match.params.categoryID);
        debugger
        var myPost = myPosts[index];

        var myComments = my_comments.filter(ele => ele.postID == myPost._id);


        return (

            <div>




                <ul>
                    <li><h1>{myPost.title}</h1></li>
                    <li>{myPost.body}</li>
                    <Comment comments={myComments} />
                    <form onChange={this.handleChange}
                        onSubmit={this.handleSubmit}>


                        <label>     Comment here! :)   </label>
                        <input name='body'
                            value={this.state.body}
                            placeholder={this.state.body}
                        />


                    </form>
                    <button> Ready to go!  </button>
                </ul>

            </div>
        )

    }



}






