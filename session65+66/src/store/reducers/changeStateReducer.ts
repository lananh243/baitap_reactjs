
const initialChangeState:string = "Rikkei Academy";

const changeStateReducer = (state = initialChangeState, action:any) => {
    switch (action.type) {
        case "CHANGE_STATE":
            return "RikkeiSoft"
        default:
            return state;
    }
}
export default changeStateReducer;