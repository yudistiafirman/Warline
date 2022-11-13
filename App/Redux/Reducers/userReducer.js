import Types from "../type"


const data = {
    email : '',
    password : '',
    loading :false,
    error : ''
}

const userReducer =(state=data,action)=>{
    switch (action.type){
        case Types.CHANGE_EMAIL :
         
            return { ...state, email : action.payload}
        case Types.CHANGE_PASSWORD : 
           
            return {...state, password : action.payload}
        case Types.LOADING: 
            return {...state,loading :true}
        case Types.ERROR_LOGIN:
            return {...state, error:action.payload,loading:false}
        default : return state
    }
}

export default userReducer