import React from 'react';
import { categories } from './Loop';
import RightSide from './Components/RightSide';

const fotos = []

export default class Homepage extends React.Component {




    render() {



        return (
            <div className='homepage'>

                <h1> *************AQui </h1>
                {/* {{
                    myPosts.map(ele => {
                        return <li className="inner_box">  <NavLink to={`/post/${ele._id}`}><img src={ele.foto}></img> <p><strong className="centered_text">{ele.title}</strong><br></br>{ele.body}</p></NavLink> </li>
                    })
                }} */}
                <div>
                    <RightSide className='videos_for_mobile' />

                </div>
            </div>
        )
    }


}