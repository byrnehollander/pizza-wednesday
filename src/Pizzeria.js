import React, { Component } from 'react'
import {
    // Collapse,
    // Navbar,
    // NavbarToggler,
    // NavbarBrand,
    // Nav,
    // NavItem,
    // NavLink,
    // Container,
    // Row,
    // Col,
    // Jumbotron,
    // Button
} from 'reactstrap'

export default class Pizzeria extends Component {

    render() {
        return (
            <div>
                {this.props.name ? (
                    <div>
                Pizzeria: {this.props.name}
                    </div>) : ''}
                {this.props.yelp ? (
                    <div>
                Yelp: {this.props.yelp}
                    </div>) : ''}
                {this.props.date ? (
                    <div>
                Date: {this.props.date}
                    </div>) : ''}
                {this.props.pics ? (
                    <div>
                Pics: {this.props.pics}
                    </div>) : ''}
            </div>
        )
    }
}
