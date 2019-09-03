import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Pagination extends Component{
    state = {
        count: 1,
        active: true
    }

    prevPageHandler = () => {
    
        this.setState({count: this.state.count - 1});
    }

    nextPageHandler = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <nav className="py-3 d-flex table-responsive">
                <ul className="py-8 mx-auto pagination pagination-lg">
                    <li className="page-item disabled">
                        <Link className="page-link" to="/" onClick={this.prevPageHandler} >Prev</Link>                           
                    </li>
                
                    <li className="page-item"><Link className="page-link" to="/">{this.state.count}</Link></li>
                    
                    <li className="page-item">
                        <Link className="page-link" to="/" onClick={this.nextPageHandler} >Next</Link>
                    </li>
                </ul>
            </nav>

        );
    }
    
}

export default Pagination;