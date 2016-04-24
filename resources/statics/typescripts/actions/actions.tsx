import * as types from "../constants/ActionTypes";

export function goLogin(info) {
    return {type: types.GO_LOGIN, info}
}
