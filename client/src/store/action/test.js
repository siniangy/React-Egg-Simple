import * as Type from '../type/type';
import axios from '../../util/axios';

// 获取name的示例
export function fetchData(data) {
  return {
    type: Type.FETCH_DATA,
    payload: data
  }
}

export const getData = () => (dispatch, getState, resolve, reject) => {
  axios.get('/getdata').then((res) => {
    dispatch(fetchData(res.data));
    resolve(true);
  }).catch(() => {
  })
}

export const putData = (params) => (dispatch, getState, resolve, reject) => {
  axios.post('/putdata', params).then((res) => {
    resolve(true)
  }).catch(() => {
  })
}


