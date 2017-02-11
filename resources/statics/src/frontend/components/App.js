import React from 'react';
import style from './App.scss';
import * as Components from './Components.js';
import Aside from '../containers/Aside.js';

class App extends React.Component {
  state = {
    offsetWidth : 0,
    offsetHeight: 0
  }

  componentDidMount() {
    if(this.state.offsetWidth) return;

    const {
      offsetWidth,
      offsetHeight
    } = this.aside;

    this.setState({
      offsetWidth: offsetWidth,
      offsetHeight: offsetHeight
    })
  }

  render() {
    const refs = this.refs.aside;
    const {
      offsetWidth,
      offsetHeight
    } = this.state;

    return (
      <div className={style.root}>
        <Aside ref={aside => { this.aside = aside }} offsetWidth={offsetWidth} offsetHeight={offsetHeight} />
        <main className={style.main}>main</main>
      </div>
    );
  }
}

export default App;
