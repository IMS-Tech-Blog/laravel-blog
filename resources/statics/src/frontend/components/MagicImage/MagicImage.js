/**
 * MagicImage.js 魔法图片
 */
import {
  Component,
  PropTypes
}             from 'react';
import {
  flattenDeep
}             from 'lodash';
import style  from './MagicImage.scss';

class MagicChunk extends Component {
  state = {
    angle: 0
  }

  handleMouseEnter = () => {
    let { angle } = this.state;
    angle ++;

    this.setState({
      angle: angle
    });

    angle <= 180 && requestAnimationFrame(this.handleMouseEnter);
  }

  render() {
    const { status, height } = this.props;
    const { angle } = this.state;
    const { handleMouseEnter } = this;

    const style = {
      height: `${height}px`,
      transform: `perspective(500px)
      rotate3d(0, 1, 0, ${angle}deg)
      scale(-1, 1)`
    };

    return (
      <div
      className={style['ims-tri']}
      onMouseEnter={handleMouseEnter}
      style={style}>
        魔法图片
      </div>
    );
  }
}

export default class MagicImage extends Component {
  getChunks(total, height) {
    const { status } = this.props;
    const chunk  = [];
    const second = this.getSeconds(total);
    const all    = total;

    while(total --) {
      chunk.push(
        <MagicChunk
        key={total}
        height={height}
        second={second[all - total]}
        status={status} />
      );
    }

    return chunk;
  }

  getSeconds(total) {
    const seconds = [];
    const result  = total / 3;

    do {
      const remainder = total % 3;

      if(remainder === 0) {
        const consult = result - Math.floor(total / 3);
        seconds.push([consult * 0.1 + 0.5]);
      } else {
        
        const i = seconds.length - 1;
        const j = seconds[i].length - 1;

        seconds[i].push(seconds[i][j] + 0.1);
      }
    } while(total --);

    return flattenDeep(seconds);
  }

  render() {
    const { offsetWidth, offsetHeight, status } = this.props;
    const tri = offsetWidth / 3;
    const height = 159;
    let total = Math.ceil(offsetHeight / height) * 3;

    const chunks = this.getChunks(total, height);
    return (

      <div
      className={style['ims-grid']}>
        {chunks}
      </div>
    );
  }
}
