import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {
	constructor() {
		super();
	}
        
	render() {
		let rows = [];
		if (this.props.news.data) {
                    return (
                            <div></div>
                    ); 

		}
		
	}
}

const mapStateToProps = (state) => {
	return {
		news: state.news
	};
};


export default connect(mapStateToProps)(News);
