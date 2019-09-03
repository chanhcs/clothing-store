import React, { Component } from 'react';
import Aisde from '../../components/Aside/Aside';
import ListCard from '../../components/Card/ListCard';
import Panigation from '../../components/Pagination/Pagination';

class Section extends Component {
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
                    price: '180.000đ',
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
                },
                {
                    id: 7,
                    name: 'Đầm nữ xanh dương',
                    price: '260.000đ',
                    img: "img/7.jpg"
                },
                {
                    id: 8,
                    name: 'Áo thun nam cổ trụ',
                    price: '190.000đ',
                    img: "img/8.jpg"
                },
                {
                    id: 9,
                    name: 'Áo khoác caro nữ',
                    price: '280.000đ',
                    img: "img/9.jpg"
                },
            ],
            searchfield: '',
        }
    }



    onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value })
    }


    render() {

        const { clothes, searchfield } = this.state;
        const filteredClothes = clothes.filter(element => {
            return element.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className="container">
                <div className="row py-3">
                    <div className="col-10 mx-auto col-lg-3">
                        <Aisde />
                    </div>
                    <div className="col-10 mx-auto col-lg-9">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.onSearchChange} />
                        <div className="py-4">
                            <ListCard listCard={filteredClothes} />
                            {/* <Panigation /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;