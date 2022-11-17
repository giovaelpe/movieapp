import React from "react";
import './Searchbar.css';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleType = this.handleType.bind(this);
    }
    handleSearch() {
        let movie = document.querySelector("#movieInput").value;
        this.props.onSearch(movie);
    }
    handleType(e){
        if(e.keyCode === 13){
            this.handleSearch();
            e.target.value = "";
        }
    }
    deleteContent(e){
        e.target.value = "";
    }
    render() {
        return (
            <div className="search-border">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' placeholder="Movie title" id="movieInput" onKeyUp={this.handleType} onFocus={this.deleteContent} />
                <button className="general-button" onClick={this.handleSearch}>Search</button>
            </div>
        );
    }
}

export default Searchbar;