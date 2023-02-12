import React, { Component } from 'react';

class PageHeader extends Component {
    render() {
        return (
            <div className={ ( this.props.alignment ? this.props.alignment : "") }>
                { this.props.subtitle }
                { this.props.title }
                { this.props.spantitle }
                { this.props.btntext }
            </div>
        );
    }
}

export default PageHeader;