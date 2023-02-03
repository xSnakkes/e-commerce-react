import React, { Component } from 'react'
import { Item } from './Item'

export class Items extends Component {
    render(){
        return (
            <section className='item__list'>
                {
                    this.props.items.map(el => (
                        <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
                    ))
                }
            </section>
        )
    }
}
