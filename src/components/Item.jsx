import React, { Component } from 'react'

export class Item extends Component {
    render(){
        return (
            <div className="item">
                <h2 className='item__title'>{this.props.item.title}</h2>
                <div className="item__img">
                    <img src={"./img/" + this.props.item.img} alt="" />
                </div>
                <div className='item__desc'>{this.props.item.desc}</div>
                <div className="items__buy">
                    <div className='item__price'>{this.props.item.price}$</div>
                    <div className="add-card" onClick={() => this.props.onAdd(this.props.item)}>
                        +
                    </div>
                </div>
                
            </div>
        )
    }
}