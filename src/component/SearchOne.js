import React, { Component } from 'react';
class MainView extends Component {
    render() {
        return (
        <div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        );
    }
}
export default MainView;