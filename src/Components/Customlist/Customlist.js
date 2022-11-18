import React from "react";
import './Customlist.css';

class Customlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e) {
        let index = parseInt(e.target.id);
        if (this.props.id === 'movies') {
            this.props.onMovieRemove(index);
        }
        if (this.props.id === 'actors'){
            this.props.onActorRemove(index);
        }
    }
    
    render() {
        let body;
        if (this.props.listContent.length) {
            body = (
                <ul className="favorite-list">
                    {
                        this.props.listContent.map((item, index) => {
                            return <li className="favorite-item" key={index.toString()}>{item}<button id={index} onClick={this.handleRemove} className="general-button minus-button">-</button></li>
                        })
                    }
                </ul>
            )
        }
        return (
            <div className="cards" id={this.props.id}>
                <h2>{this.props.children}</h2>
                {body}
            </div>
        );
    }
}

export default Customlist;