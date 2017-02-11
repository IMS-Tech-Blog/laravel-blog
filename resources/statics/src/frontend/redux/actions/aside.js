/**
 * actions in redux
 */
import * as Constants from '../constants/index.js';

const {
  ENTER_EFFECT,
  LEAVE_EFFECT
} = Constants.default;

export const handleEnter = item => {
  return {
  	type : ENTER_EFFECT,
  	item
  }
}

export const handleLeave = item => {
  return {
  	type : LEAVE_EFFECT,
  	item
  }
}