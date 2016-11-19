import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



const products = [
  {
    id: '1',
    name: 'Screwdriver',
    price: 4.99,
    imageUrl: 'http://pngimg.com/upload/screwdriver_PNG9498.png'
  },
  {
    id: '2',
    name: 'Defibrillator',
    price: 59.99,
    imageUrl: 'http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/7/2012/06/defibrillator.jpg'
  },
  {
    id: '3',
    name: 'Burger',
    price: 9.99,
    imageUrl: 'http://cdn.playbuzz.com/cdn/a477a4a7-65e6-4f89-824a-298c5415ba18/478bb14c-afb1-40c3-878c-9a48953f2cc9.jpg'
  },
  {
    id: '4',
    name: 'Pizza',
    price: 10.99,
    imageUrl: 'http://www.restopizz.com/images/pizzas/pizza1_1.png'
  },
  {
    id: '5',
    name: 'Palapel',
    price: 5.99,
    imageUrl: 'http://www.zipale.co.il/pictures/160/29730.jpg'
  },
  {
    id: '6',
    name: 'Brown Shoes',
    price: 59.99,
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/G/31/img15/Shoes/CatNav/p._V293117552_.jpg'
  },
];

const delay = (time) => (
  new Promise(resolve => {
    setTimeout(resolve, time);
  })
);

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    Promise.resolve()
      .then(() => delay(3000))
      .then(() => this.setState({ products: [products[0]] }))
      .then(() => delay(2000))
      .then(() => this.setState({ products: this.state.products.concat([products[3]]) }))
      .then(() => delay(3000))
      .then(() => this.setState({ products: this.state.products.concat([products[4], products[0]]) }))
      .then(() => delay(1000))
      .then(() => this.setState({ products: this.state.products.concat([products[3]]) }))
      .then(() => delay(2000))
      .then(() => this.setState({ products: this.state.products.concat([products[0], products[2]]) }))
      .then(() => delay(5000))
      .then(() => this.setState({ products: this.state.products.concat([products[5], products[1]]) }))
      .then(() => delay(1000))
      .then(() => this.setState({ products: this.state.products.concat([products[4]]) }))
      .then(() => delay(2000))
      .then(() => this.setState({ products: this.state.products.concat([products[1], products[1]]) }))
      .then(() => delay(3000))
      .then(() => this.setState({ products: this.state.products.concat([products[4]]) }))
      .then(() => delay(1000))
      .then(() => this.setState({ products: this.state.products.concat([products[2]]) }))
  }

  handleClick() {
    this.setState({
      products: this.state.products.concat([products[this.state.counter]]),
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div onClick={this.handleClick} >
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            showRowHover={true}
            displayRowCheckbox={false}
          >
            {this.state.products.map((product, key) => (
              <TableRow key={key}>
                <TableRowColumn>{product.id}</TableRowColumn>
                <TableRowColumn>{product.name}</TableRowColumn>
                <TableRowColumn>{product.price}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
