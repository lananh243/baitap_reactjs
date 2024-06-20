import { User } from "../../interface";

const initialPerson:User[]=[
    {
        id:1,
        name:"Nguyễn Văn A",
        gender:"Nam",
        date:"5/4/2024",
        address:"Thanh Xuân, Hà Nội"
    },
    {
        id:2,
        name:"Nguyễn Thị C",
        gender:"Nữ",
        date:"6/7/2024",
        address:"Cầu Giấy, Hà Nội"
    },
    {
        id:3,
        name:"Nguyễn Văn C",
        gender:"Nam",
        date:"5/5/2024",
        address:"Thanh Xuân, Hà Nội"
    }

]

const personReducer = (state = initialPerson, action:any) => {
    switch (action.type) {
        case "ADD":
            return [...state];
        case "DELETE":
            return [...state];
        case "UPDATE":
            return [...state];
    
        default:
            return state;
    }
}
export default personReducer;