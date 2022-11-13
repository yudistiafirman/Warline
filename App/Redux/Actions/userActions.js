import Types from "../type";


export const onChangeEmail = (text)=>({type:Types.CHANGE_EMAIL,payload :text })
export const onChangePassword = (text)=> ({type:Types.CHANGE_PASSWORD,payload:text})


