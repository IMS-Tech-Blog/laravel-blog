/**
 * aside reducer
 */
import Immutable from 'immutable';
import * as Constants from '../constants/index.js';

const {
  ENTER_EFFECT,
  LEAVE_EFFECT
}                  = Constants.default;
const initialState = Immutable.List([]);

export function playEffect(state = initialState, action) {
  const type = action.type;
  switch(type) {
  	case ENTER_EFFECT:
  	  return state.push({ status: 'play' });
  	case LEAVE_EFFECT:
  	  return state.push({ status: 'stop' });
  	default:
  	  return state;
  }
}