import axios from "axios"
import * as types from "./actionTypes"

const getCategoryRequest = () =>{
    return {type:types.GET_CATEGORY_REQUEST}
}


const getCategorySuccess = (payload) =>{
   return {type: types.GET_CATEGORY_SUCCESS,payload}
}


const getCategoryFailure = (error) =>{

    return {type:types.GET_CATEGORY_FAILURE,payload:error}
}


const getCategory = (params) => (dispatch) => {
    const requestaction = getCategoryRequest();
    dispatch(requestaction);
    axios
      .get(`http://localhost:8080/sports?id=${params}`)
      .then((r) => dispatch(getCategorySuccess(r.data)))
      .catch((e) => dispatch(getCategoryFailure(e)));
  };


export {getCategoryRequest,getCategorySuccess,getCategoryFailure,getCategory}