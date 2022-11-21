import Types from "../type"

const data = {
    productDetail :null,
    loading:false
}


const productDetailReducer = (state=data,action)=>{
    switch(action.type){
        case Types.LOAD_PRODUCT_DETAIL :
            return {...state,productDetail:action.payload}
        case Types.LOADING_PRODUCT_DETAIL:
            return {...state,loading:true}
        case Types.FINISH_LOADING_DETAIL:
            return {...state,loading:false}
        case Types.EMPTY_PRODUCT_DETAIL:{
            return {...state,productDetail:null}
        }
        default : return state
    }
}

export default productDetailReducer