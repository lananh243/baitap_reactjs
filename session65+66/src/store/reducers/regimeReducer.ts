const initialCheckbox:boolean = false;

const changeRegimeReducer = (state = initialCheckbox , action:any) => {
    switch (action.type) {
        case "CHANGE_CHECKBOX":
            return !state;
        default:
            return state;
    }
}
export default changeRegimeReducer;