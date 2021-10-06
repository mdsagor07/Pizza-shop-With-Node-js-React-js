export const getAllPizzasReducer=(state={},action)=>{

    switch(action.type){

        case "GET_PIZZA_REQUES": return{
            ...state
        }
        case "GET_PIZZA_SUCCESS": return{

            pizzas: action.payload 
        }

        case "GET_PIZZA_FAILED": return{
            error=action.payload
        }
        default: return state
    }
}