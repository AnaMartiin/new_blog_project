import React from 'react';
import { posts } from '../Loop'

export default class Create extends React.Component {

    state = {
        title: '',
        body: '',
        category_id: '',
        user_id: '',
        photo_url: ' '
    }



    handleChange = e => this.setState({
        [e.target.name]: e.target.value,
        category_id: this.props.match.params.categoryID,
        user_id: ' ',
        photo_url: ' '
    })

    handleSubmit = e => {
        e.preventDefault()






        // // let { title, body } = this.state
        // // posts.push({
        // //     foto: '',
        // //     title: title,
        // //     body: body,
        // //     owner: '',
        // //     categoryID: this.props.match.params.categoryID,
        // //     _id: ''
        // })

        console.log(posts, '++++', this.state)

    }
    render() {

        return (
            <div className='margin_in_images_categories'>

                <form onChange={this.handleChange}
                    onSubmit={this.handleSubmit}>
                    <div >
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="blog_post_title">Title</label>
                            <div>
                                <input name='title'
                                    value={this.state.title}
                                    placeholder="title"
                                />
                            </div>
                        </div>
                        <div >
                            <label className="col-sm-2 control-label required" htmlFor="blog_post_body">Body</label>
                            <div>
                                <input name='body'
                                    value={this.state.body}
                                    placeholder="body"
                                />
                            </div>
                        </div>
                        <div >
                            <div >

                                <button type="submit"
                                    id="blog_post_submit"
                                    className="btn-default btn">
                                    <label> Submiiit it! </label>
                                </button>
                            </div>



                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


