import {types} from "./types";

export function changeTitleAction(){
    return{
        type: types.CHANGE_TITLE
    }
}

export function withParamsAction(title){
    return{
        type: types.WITH_PARAMS,
        payload: title
    }
}

export function changeInputAction(value){
    return{
        type: types.VALUE,
        payload:value
    }
}

export function addUserAction(value){
    return{
        type: types.ADD_USER,
        payload: value
    }
}

export function clearUser(value){
    return{
        type: types.CLEAR_USER,
        payload: ""
    }
}

export function deleteAction(){
    return{
        type: types.DELETE_ALL,
        payload: ""
    }
}