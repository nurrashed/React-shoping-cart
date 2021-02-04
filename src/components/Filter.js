import React, { Component } from 'react';
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
    render() {
        return !this.props.filteredProducts ? (
            <div>Loading...</div> 
        )   :   (
            <div className="filter">
                <div className="filter-result">{this.props.filteredProducts.length} Products</div>
                <div className="filter-sort">
                    Order {" "} 
                    {/* <select value={this.props.price} onChange={this.props.sortProducts}> */}   
                    <select
                        value={this.props.price} 
                        onChange={(e)=>
                            this.props.sortProducts(
                                this.props.filteredProducts, 
                                e.target.value
                            )
                        }
                    >                    
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-genre">
                    Filter {" "}
                    {/* <select value={this.props.genre} onChange={this.props.filterProducts}> */}
                    <select 
                        value={this.props.genre} 
                        onChange={(e)=>
                            this.props.filterProducts(
                                this.props.products, 
                                e.target.value
                            )
                        }
                    >
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

export default connect(
    (state) => ({
      genre: state.products.genre,
      sort: state.products.sort,
      products: state.products.items,
      filteredProducts: state.products.filteredItems,
    }),
    {
      filterProducts,
      sortProducts,
    }
  )(Filter);