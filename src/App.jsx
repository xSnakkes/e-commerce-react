import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'
import React from "react";
import { Items } from "./components/Items";
import {AiOutlineArrowDown} from "react-icons/ai";
import Categories from "./components/Categories";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }

  render(){
    return (
      <div className="wrapper">
        <header className="header">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        </header>
        <main className="page">
          <Main />
          <div className="arrow" onClick={()=>{
            window.scrollTo({
              top: 1100,
              behavior: "smooth"
            });
          }}>
            <div className="arrow__text">
              scroll bottom
            </div>
            <AiOutlineArrowDown className="arrow__down" />
          </div>
          <Categories chooseCategory={this.chooseCategory}/>
          <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id )})
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