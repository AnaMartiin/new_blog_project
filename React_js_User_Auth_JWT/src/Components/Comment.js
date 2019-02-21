import React from 'react';

export default class Comments extends React.Component {

    // state = {
    //     body: '',
    //     owner: '',
    //     postID: '',
    //     _id: '',

    // }

    // handleChange = e => this.setState({ [e.target.name]: e.target.value })
    // handleSubmit = e => {

    //     let { body } = this.state
    //     let postID = Number(this.props.postID)
    //     e.preventDefault()
    //     comments.push({
    //         body: body,
    //         owner: '',
    //         postID: postID,
    //         _id: ''
    //     })

    // }


    render() {

        return (
            <div>
                {/* 
                <form onChange={this.handleChange}
                    onSubmit={this.handleSubmit}>


                    <label>     Comment here! :)   </label>
                    <input name='body'
                        value={this.state.body}
                        placeholder={this.state.body}
                    />

                    <button> Ready to go!  </button>
                </form> */}



                <h1>C O  M M E N T S</h1>
                {this.props.comments.map(ele => <h1>  {ele.body}</h1>)}
            </div>
        )
    }

}