import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './SliderButton.style.scss';

export class SliderButton extends PureComponent {
  static propTypes = {
    isShow: PropTypes.bool,
    onClickButton: PropTypes.func,
    className: PropTypes.string,
    angelRotation: PropTypes.number,
  };

  static defaultProps = {
    isShow: true,
    onClickButton: () => {},
    className: '',
    angelRotation: 0,
  };

  renderArrow() {
    const { angelRotation } = this.props;
    return (
      <svg
        style={{ '--angle-rotation': `${angelRotation}deg` }}
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.25 1.06857L1.625 6.6876L7.25 12.3066"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  renderButton() {
    const { isShow, onClickButton, className } = this.props;
    return (
      isShow && (
        <button
          type="button"
          onClick={onClickButton}
          className={`SliderButton ${className}`}
        >
          {this.renderArrow()}
        </button>
      )
    );
  }

  render() {
    return this.renderButton();
  }
}

export default SliderButton;
