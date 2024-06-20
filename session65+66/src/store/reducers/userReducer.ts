import { User } from "../../interface";

const initialUser:User = {
    id:1,
    name:"Nguyễn Văn Nam",
    gender:"Nam",
    date:"20/03/2024",
    address:"Thanh Xuân, Hà Nội"
}
const userReducer = (state = initialUser, action:any) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default userReducer;