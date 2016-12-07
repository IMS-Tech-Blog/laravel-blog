/**
 * Intro.js 个人简介页
 */
import {
  Component,
  PropTypes
} from 'react';
import style      from './Intro.scss';
import face       from '../../../public/images/face.png';

export default class Intro extends Component {

  state = {
    face : face,
    name : null,
    motto: null
  }

  static propTypes = {
    face : PropTypes.string,
    name : PropTypes.string,
    motto: PropTypes.string
  }

  render() {
    const { face, name, motto } = this.state;

    return (
      <div className={style['ims-side']}>
        <div className={style['ims-face']}>
          <img src={face} alt="" />
        </div>
        <div className={style['ims-name']}>名字</div>
        <div className="ims-motto">座右铭</div>
      </div>
    );
  }
}
