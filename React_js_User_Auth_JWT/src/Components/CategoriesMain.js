import React from 'react';
import RightSide from './RightSide'
import { categories } from '../Loop'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class CategoriesMain extends React.Component {


    state = {
        categories: []

    }

    componentDidMount() {
        var url = `http://localhost:3001/categories/showall`
        axios.get(url)
            .then((res) => {
                debugger
                this.setState({ categories: res.data })
            })
            .catch((error) => {
                debugger
            })
    }


    render() {
        return (
            <div className='videos, homepage ' >

                <div >
                    <div>

                        <ul className='categories_mainpage grid_in_categories'>
                            {this.state.categories.map(ele => {
                                return <li><NavLink to={`/category/${ele._id}`}> {ele.name}</NavLink> <br></br> <NavLink to={`/category/${ele._id}`}> <img src={ele.photoUrl}></img></NavLink> </li>
                            })}
                        </ul>
                    </div>


                </div>

                <div><RightSide /></div>


            </div>
        )
    }

}

