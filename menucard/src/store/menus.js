import store from "./configStore";
import data from "../Data";

//ACTIONS
export const filterByCategory = (categoryType, type) => {
    store.dispatch({
        type: 'FILTER_BY_CATEGORY',
        payload: {
            categoryType: categoryType,
            type : type
        }
    })
}

//REDUCERS
const reducer = (state = data.filter((sData) => sData.type=='Veg'), action) => {
    if (action.type === 'FILTER_BY_CATEGORY') {
        if (action.payload.categoryType == 'All' && action.payload.type == 'All Three') {
            return data;
        }else if (action.payload.categoryType == 'All' && !(action.payload.type == 'All Three')) {
            return data.filter((singleObj) => {
                if ((singleObj.type == action.payload.type)) {
                    return singleObj
                }
            })
        }else if ((action.payload.type == 'All Three') && !(action.payload.categoryType == 'All')) {
            return data.filter((singleObj) => {
                if ((singleObj.category == action.payload.categoryType)) {
                    return singleObj
                }
            })
        } else {
            return data.filter((singleObj) => {
                if ((singleObj.category == action.payload.categoryType) && (singleObj.type == action.payload.type)) {
                    return singleObj
                }
            })
        }
    }
}

export default reducer;