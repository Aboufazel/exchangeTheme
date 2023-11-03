
import axios from "axios";

const Exchanger = axios.create({
        baseURL: 'http://localhost:8000/api/v1'
    }
)
Exchanger.interceptors.response.use()



export const GetUserFeedBack = ()=>{

    return Exchanger.get('/panel/feedbacks')

}


export const SendUserFeedBack = (name , email , comment) =>{

    return Exchanger ({
        method:"post",
        url:'/panel/feedbacks',
        data:{
            "name":name ,
            "email": email,
            "content": comment
        },
        headers:{
            'Content-Type': 'application/json'
        }
    })

}



export const GetExchangerCoin = ()=>{
    return Exchanger.get('gateway/list')
}