import React, {Component} from 'react';


class Pagination extends Component{
    state = {
        count: 1,
        active: true,
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
                <ul className="py-8 mx-auto btn-group">
                 
                    <button className="btn btn-default someclass" type="submit" onClick={this.prevPageHandler} disabled={this.state.count === 1}>Prev</button>

                
                    <button className="btn btn-default someclass" type="submit">{this.state.count}</button>
                    
                    <button className="btn btn-default someclass" type="submit" onClick={this.nextPageHandler} disabled={this.state.count === 4}>Next</button>
                </ul>
            </nav>

        );
    }
    
}

export default Pagination;