import React from "react";
import './Customlist.css';

class Customlist extends React.Component {
    
    render() {
        let body;
        if(this.props.listContent.length) {
            body = (
                <ul className="favorite-list">
                    {
                        this.props.listContent.map((item, index) => {
                            return <li className="favorite-item" key={index.toString()}>{item}</li>
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