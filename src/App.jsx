import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
//import { listenToAuth } from './actions/auth';
//import { listenToArticles } from './actions/articles';
import { listenToNews } from './actions/news';
import Page from './components/Page';

export class App extends Component {
	componentWillMount() {
		//store.dispatch(listenToAuth());
		//store.dispatch(listenToArticles());
                console.log('App componentWillMount');
                store.dispatch(listenToNews());
	}
	render() {
		return (
			<Provider store={store}>
				<Page />
			</Provider>
		);
	}
}
