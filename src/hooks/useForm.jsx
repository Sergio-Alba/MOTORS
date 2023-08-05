/* eslint-disable react-refresh/only-export-components */
import { useReducer } from "react";
import { validateInput } from "../util/functions/form-validation";

const INPUTACTIONS ={
  INPUT_CHANCE:'INPUT_CHANCE',
  CLEAR_INPUT: 'CLEAR_INPUT',
  SET_DATA: 'SET_DATA',
  INPUT_FOCUS: 'INPUT_FOCUS',
  INPUT_BLUR: 'INPUT_BLUR',
}

const formReducer = (state, action)=>{
  switch(action.type){
    case INPUTACTIONS.INPUT_CHANCE:{
      const{name,value,error,hasError,isFormValid,active} = action.data;
      return {
        ...state,
        [name]: {
          value,
          error,
          hasError,
          active,
        },
        isFormValid,
      };
    }
    case INPUTACTIONS.INPUT_FOCUS:{
      return {
        ...state,
        [action.data.name] : {
          ...state[action.data.name],
          active: true,
        }
      }
    }
    case INPUTACTIONS.CLEAR_INPUT:
      return action.data;
    case INPUTACTIONS.INPUT_BLUR:
      return  {
        ...state,
        [action.data.name] : {
          ...state[action.data.name],
          active: false,
        }
      }
    default:
      return state;
  }
}

export const useForm =(initialState)=>{
  const [formState,dispatchFormState]= useReducer(formReducer,initialState);

  const inputHandler = ({name,value})=>{
    const {error,hasError}= validateInput({type:name,value});
    let isFormValid = true;


    for(let key in formState){
      const item = formState[key];
      if( key!== name && hasError){
        isFormValid = false;
      }
      else if (key !== name && item.hasError){
        isFormValid = false;
        break;
      }
    }

    dispatchFormState({
                type:INPUTACTIONS.INPUT_CHANCE,
                data:{ 
                  name,
                  value,
                  error,
                  hasError,
                  isFormValid,
                  active:true,
                }
              }
              )
  }
  const clearInputs = (formState)=>{
    dispatchFormState({ 
      type: INPUTACTIONS.CLEAR_INPUT,
      data: formState
    })
  }

  const inputFocus = ({name})=>{
    dispatchFormState({
      type:INPUTACTIONS.INPUT_FOCUS,
      data:{
        name,
        }
    })
  }

  const inputBlur = ({name})=> {
    dispatchFormState({
      type:INPUTACTIONS.INPUT_BLUR,
      data:{
        name,
        },
    })
  }
  return [formState, inputHandler, clearInputs,inputFocus,inputBlur]
}