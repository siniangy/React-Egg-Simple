import * as Type from '../type/type';
import axios from '../../util/axios';
import { message } from 'antd';

export function fetchData(data) {
  return {
    type: Type.FETCH_DATA,
    payload: data
  }
}

export const getData = () => (dispatch, getState, resolve, reject) => {
  axios.get('/getdata').then((res) => {
    if (res.data) {
      message.success('获取数据成功');
      dispatch(fetchData(res.data));
      resolve(true);
    } else {
      reject(false);
    }
  }).catch(() => {
  })
}

export const putData = (params) => (dispatch, getState, resolve, reject) => {
  axios.post('/putdata', params).then((res) => {
    message.success('添加数据成功');
    resolve(true)
  }).catch(() => {
  })
}


