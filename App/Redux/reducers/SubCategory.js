import { GetSubCategory_Action, GetSubCategory_Action_Failure, GetSubCategory_Action_Success } from "../actions/actionTypes";



const initialState = {
    data: {},
    loading: false,
    error: null


};

const SubCategory = (state = initialState, action) => {

    switch (action.type) {

        case GetSubCategory_Action: {

            return {
                ...state,
                loading: true,
                status: "fail",
            }
        }
        case GetSubCategory_Action_Success: {

            return {
                ...state,
                data: action?.payload?.data,
                loading: false,
                status: "success"
            }
        }
        case GetSubCategory_Action_Failure: {

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



export { SubCategory };
