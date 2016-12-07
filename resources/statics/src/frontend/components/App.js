import React from 'react';
import style from './App.scss';
import * as Components from './Components.js';

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
    } = this.refs.aside;

    this.setState({
      offsetWidth: offsetWidth,
      offsetHeight: offsetHeight
    })
  }

  displayMagic(offsetWidth, offsetHeight) {
    let component = <br />;

    offsetWidth && (component = <Components.MagicImage
                                offsetWidth={offsetWidth}
                                offsetHeight={offsetHeight} />);
    return component;
  }

  render() {
    const refs = this.refs.aside;
    const {
      offsetWidth,
      offsetHeight
    } = this.state;
    const magicImage = this.displayMagic(offsetWidth, offsetHeight);

    return (
      <div className={style.root}>
        <aside className="side" ref="aside">
          {magicImage}
          <Components.Intro />
        </aside>
        <main className={style.main}>main</main>
      </div>
    );
  }
}

export default App;
