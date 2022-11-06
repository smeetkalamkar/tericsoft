import * as types from "./actionTypes";

const initialState = {
    category:[],
    isLoading:false,
    isError:false
}


const reducer = (state=initialState,action)=>{
  const {type,payload} = action

 switch(type){
    case types.GET_CATEGORY_REQUEST:
        return {...state,isLoading:true}
    case types.GET_CATEGORY_SUCCESS :
        return {...state,category:payload}
        case types.GET_CATEGORY_FAILURE:
            return {...state,isError:true}
    default:
    return state
 }
}


export default reducer