import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'
import React from "react";
import { Items } from "./components/Items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Grey chair',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Wall Light',
          img: 'wall-light.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'lights',
          price: '24.99'
        },
        {
          id: 5,
          title: 'White chair',
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '49.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }

  render(){
    return (
      <div className="wrapper">
        <header className="header">
          <Header orders={this.state.orders} />
        </header>
        <main className="page">
          <Main />
          <Items items={this.state.items} onAdd={this.addToOrder}/>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }

  addToOrder(item){
    let isInArr = false
    this.state.orders.forEach(el =>{
      if(el.id === item.id){
        isInArr = true
      }
    })
    if(!isInArr){
      this.setState({orders: [...this.state.orders, item] } )
    } 
  }
}
    

export default App;
