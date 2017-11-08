import React, { Component } from 'react';
import axios from 'axios';
import './Bios.css';
import Navbar from '../Navbar/Navbar';


export default class Movies extends Component {

constructor() {
    super()
    this.state = {
        list_of_bios: ['']
    }
}

componentDidMount() {
    axios.get('http://localhost:8080/api/bios/').then(response => {
        // console.log(response)
        this.setState({
            list_of_bios: response.data
        })
    })
}

    render() {

        var bios = this.state.list_of_bios.map((item, index) => {
            return (
                <div key={index} className='bio-container'>
                    <h2 className='name'>{item.full_name}</h2>
                    <img src={`${item.portrait}`} alt={`${item.full_name}`} className='portrait'></img>
                    <p className='bio'>{item.bio}</p>
                </div>
            )
        })

        return (
            <div>
                <Navbar />
                
                 <section className='bio-container'>
                    {bios}
                </section> 
            </div>
        )
    }
}