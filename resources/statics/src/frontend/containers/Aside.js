/**
 * container Aside
 */
import {
  Component,
  PropTypes
} from 'react';
import {
  MagicImage,
  Intro
} from '../components/Components.js';
import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';
import * as Actions from '../redux/actions/aside.js';

@connect(
  // mapStateToProps
  state => ({
    playEffect: state.playEffect
  }),
  // mapDispatchToProps
  dispatch => (
    bindActionCreators(Actions, dispatch)
  )
)
export default class Aside extends Component {
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
  displayMagic(offsetWidth, offsetHeight) {
    let component = '';
    const { status } = this.props.playEffect.last() || { status: true };

    offsetWidth && (component = <MagicImage
                                offsetWidth={offsetWidth}
                                offsetHeight={offsetHeight}
                                status={status} />);
    return component;
  }

  render() {
  	const { offsetWidth, offsetHeight } = this.state;
  	const { handleEnter, handleLeave, state } = this.props;
  	const magicImage = this.displayMagic(offsetWidth, offsetHeight);


    return (
      <aside className="side"
      ref={aside => { this.aside = aside }}
      onMouseEnter={() => { handleEnter() }}
      onMouseLeave={() => { handleLeave() }}>
        {magicImage}
        <Intro />
      </aside>
    )
  }
}