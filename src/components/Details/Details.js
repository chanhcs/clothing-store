import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
    state = {
        loadedPost: []
    }
    componentDidMount() {
        {
            axios.get('https://jsonplaceholder.typicode.com/posts/')
                .then(response => {
                    this.setState({ loadedPost: response.data });
                });
        }

    }

    render() {
        const pid = parseInt(this.props.match.params.id);
        return (
            <div>
                {
                    this.state.loadedPost.map((val, key) => {
                        //console.log(typeof(pid))
                        if (val.id === pid) {
                            return <div key={val.id}> <h3>Tên sản phẩm: {val.title} </h3> <p>Mô tả chi tiết: {val.body}</p> </div>
                        }
                        return '';
                    })
                }
            </div>
        )
    }

}

export default Details;