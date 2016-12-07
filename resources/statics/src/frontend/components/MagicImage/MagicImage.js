/**
 * MagicImage.js 魔法图片
 */
import {
  Component,
  PropTypes
}                from 'react';
import style     from './MagicImage.scss';

const MagicChunk = (props) => (
  <div
  className={style['ims-tri']}
  style={{ height: `${props.height}px` }}>
    魔法图片
  </div>
)

export default class MagicImage extends Component {
  state = {

  }

  getChunks(total, height) {
    const chunk = [];

    while(total --) {
      chunk.push(
        <MagicChunk
        key={total}
        height={height} />
      );
    }

    return chunk;
  }

  render() {
    const { offsetWidth, offsetHeight } = this.props;
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
