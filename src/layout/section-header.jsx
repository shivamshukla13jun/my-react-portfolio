import React, { Component } from 'react';

class SectionHeader extends Component {
    render() {
        return (
            <div className={ ( this.props.alignment ? this.props.alignment : "") }>
                { this.props.cattitle }
                { this.props.subtitle }
                { this.props.title }
                { this.props.desc }
            </div>
        );
    }
}

export default SectionHeader;