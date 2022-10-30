import { GetCategories_Action, GetCategories_Action_Failure, GetCategories_Action_Success } from "../actions/actionTypes";



const initialState = {
    data: {},
    loading: false,
    error: null


};

const CategoriesReducer = (state = initialState, action) => {

    switch (action.type) {

        case GetCategories_Action: {

            return {
                ...state,
                loading: true,
                status: "fail",
            }
        }
        case GetCategories_Action_Success: {

            return {
                ...state,
                data: action?.payload?.data,
                loading: false,
                status: "success"
            }
        }
        case GetCategories_Action_Failure: {

            return {
                ...state,
                data: action?.payload?.data,
                loading: false,
                status: "fail"

            }
        }
        default: {
            return state;
        }

    }

};



export { CategoriesReducer };
