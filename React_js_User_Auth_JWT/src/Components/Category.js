import React from 'react';
import RightSide from './RightSide'
import { posts } from '../Loop'
import { NavLink } from 'react-router-dom';
import CreatePost from './CreatePost';
//POST LIST 


export default class CategoriesList extends React.Component {

    state = {
        title: '',
        body: ''
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    handleSubmit = e => {
        let { title, body } = this.state
        e.preventDefault()
    }
    render() {
        var id = this.props.match.params.id


        var myPosts = posts.filter(ele => ele.categoryID == id);

        return (
            <div className='margin_in_images_categories' >

                <div className="main_box">

                    <ul>

                        <h1 className='centered_text ' >  Weight Control Diet </h1>
                        <button className=' button_place' > <NavLink to={`/post/create/${id}`}>Click here to create a new post!</NavLink> </button>


                        {myPosts.map(ele => {
                            return <li className="inner_box">  <NavLink to={`/post/${ele._id}`}><img src={ele.foto}></img> <p><strong className="centered_text">{ele.title}</strong><br></br>{ele.body}</p></NavLink> </li>
                        })
                        }
                    </ul>
                    <RightSide />
                </div>

            </div >

        )

    }

}

