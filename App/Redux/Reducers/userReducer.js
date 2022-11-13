import Types from "../type"


const data = {
    email : '',
    password : '',
    user_id:'',
    loading :false,
    error:false

}

const userReducer =(state=data,action)=>{
    switch (action.type){
        case Types.CHANGE_EMAIL :
            return { ...state, email : action.payload}
        case Types.CHANGE_PASSWORD : 
            return {...state, password : action.payload}
        case Types.AUTH_SUCSESS : 
            return {...state,user_id :action.payload,loading:false}
        case Types.LOADING: 
            return {...state,loading :true}
        case Types.ERROR_LOGIN:
            return {...state, loading:false,error:true}
        default : return state
    }
}

export default userReducer