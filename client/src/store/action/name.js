import * as Type from '../type/type';
import axios from '../../util/axios';

// 获取name的示例
export function upDateName(data) {
  return {
    type: Type.FETCH_NAME,
    payload: data
  }
}

export const getName = () => (dispatch, getState, resolve, reject) => {
  axios.get('/name').then((res) => {
    dispatch(upDateName(res.data));
    resolve(true);
  }).catch(() => {

  })
}
