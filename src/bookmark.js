import React from 'react';
import './index.css';
import Rating from './rating';

export default class Bookmark extends React.Component {

    static defaultProps = {
        sections: []
    };

    state = {
        activeSectionIndex: null
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex });
        console.log(this.state.activeSectionIndex);
    }

    render() {
        return (
            <div className="bookmark" >
                <div className="bookmark__row" onClick={() => this.handleSetActiveSection(this.props.index)}>
                    <div className="bookmark__title">
                        <a
                            href={this.props.url}
                            target="_blank"
                            rel="noopener noreferrer">
                            {this.props.title}
                        </a>
                    </div>
                    <Rating value={this.props.rating} />
                </div>
                <div className="bookmark__description">
                    {(this.state.activeSectionIndex === this.props.index) && <p>{this.props.desc}</p>}
                </div>
            </div>
        )
    }
}