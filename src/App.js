//Feature-1
import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      name: data.name,
      price: data.price,
      genre: "",
      sort: ""
    }
  }

  sortProducts = (event) =>{
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state)=>({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a,b) =>
          sort === "lowest"
            ? a.price > b.price 
              ? 1
              : -1
          :sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
          : a._id < b._id
            ? 1
            : -1
      ) 
    }));
  }

  filterProducts = (event) =>{
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({genre: event.target.value, products: data.products});
    }
    else{
      this.setState({
        genre: event.target.value,
        products: data.products.filter(product => product.genre.indexOf(event.target.value) >= 0)
      });
    }
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a className="font-red" href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter 
                count={this.state.products.length}
                genre={this.state.genre}
                price={this.state.price}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default App;
