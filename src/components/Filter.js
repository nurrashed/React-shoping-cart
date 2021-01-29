import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                    Order {" "} 
                    <select value={this.props.price} onChange={this.props.sortProducts}>                       
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-genre">
                    Filter {" "}
                    <select value={this.props.genre} onChange={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Si-fi">Si-fi</option>
                    </select>
                </div>
            </div>
        )
    }
}
