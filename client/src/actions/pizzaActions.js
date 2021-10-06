import axios from 'axios'

export const getAllpizzas=()=>dispatch=>{

    dispatch({type:"GET_PIZZA_REQUEST"})

    try {
        
        const response=axios.get('/api/pizzas/getpizzas')
        console.log(response)
        dispatch({type:"GET_PIZZA_SUCCESS",payload:response.data})

    } catch (error) {
        dispatch({type:"GET_PIZZA_FAILED",payload: error})
        
    }

}