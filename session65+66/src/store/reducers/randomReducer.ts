
const initialRandomNumber:number[] = [];

const randomNumberReducer = (state = initialRandomNumber, action:any) => {
    switch (action.type) {
        case "ADD_RANDOM_NUMBER":
            const newNumber = Math.floor(Math.random() * 100);
            return [...state, newNumber];
        default:
            return state;
    }
}
export default randomNumberReducer;