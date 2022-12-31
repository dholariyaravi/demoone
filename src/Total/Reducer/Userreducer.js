const initialState = { data:[] ,error:'', isLoading:false};

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'Started':
    return {...state, isLoading:true}

  case 'GET_USER_SUC' :
    return {...state, isLoading:false, data:payload};

  case 'GET_USER_FAILED' :
    return {...state, isLoading:false, error:payload};


  default:
    return state
  }
}
