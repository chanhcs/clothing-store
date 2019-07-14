import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import ListCard from './components//Card/ListCard';
import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      clothes: [
        {
          id: 1,
          name: 'Áo sơ mi trắng công sở',
          price: '200.000đ',
          img: "img/1.jpg"
      },
      {
          id: 2, 
          name: 'Áo thun nam', 
          price: '300.000đ',
          img: "img/2.jpg"
      },
      {
          id: 3, 
          name: 'Sơ mi nữ cổ bèo sm118', 
          price:'180.000đ',
          img: "img/3.jpg"
      },
      {
          id: 4, 
          name: 'Áo khoác kaki nam', 
          price: '250.000đ',
          img: "img/4.jpg"
      },
      {
          id: 5, 
          name: 'Áo sơ mi nữ công sở', 
          price: '220.000đ',
          img: "img/5.jpg"
      },
      {
          id: 6, 
          name: 'Áo khoác jean nam', 
          price: '240.000đ',
          img: "img/6.jpg"
      }
      ],
      searchfield: '',   
    }
  }
     
  

  onSearchChange = (event) => {
    
    this.setState({ searchfield: event.target.value })
  }


  render() {
    
    const {clothes, searchfield} = this.state;
    const filteredClothes = clothes.filter(element => {
      return element.name.toLowerCase().includes(searchfield.toLowerCase());
  })

   
    return !clothes.length ?
      <h1 className='tc'>loading...</h1> :
      (
        <div className="App">
          <Header />
          <div className="container">
            <div className="row py-3">
              <div className="col-10 mx-auto col-lg-3">
                <Aside />
              </div>
              <div className="col-10 mx-auto col-lg-9">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.onSearchChange}/>
                <div className="py-4">
                  <ListCard listCard={filteredClothes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default App;

