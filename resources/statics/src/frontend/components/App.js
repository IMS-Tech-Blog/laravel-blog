import React from 'react';

const App = () => (
  <div>
    <h2>Hello,nnnnnn</h2>
    <h5>aaaa</h5>
  </div>
);

class AppClass extends React.Component {
	constructor() {
		super();
	}

	state = {
		isShow: false
	}

	componentWillMount() {
		console.log('This is the period');
	}

	showH5 = () => {
		this.setState({
			isShow: true
		});
	}
	hideH5 = () => {
		this.setState({
			isShow: false
		});

	}

	render() {
		return (
			<div>
			<h2>Hello fantasty aaaa</h2>
			<h5 style={{ display: this.state.isShow ? 'block' : 'none' }}>I am react</h5>
			<button onClick={this.showH5}>show</button>
			<button onClick={this.hideH5}>hide</button>
			</div>
		);
	}
}


export default AppClass;
