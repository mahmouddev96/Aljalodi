import { Details_Action, Details_Action_Failure, Details_Action_Success } from "../actions/actionTypes";



const initialState = {
    data: {},
    loading: false,
    error: null


};

const DetailsReducer = (state = initialState, action) => {

    switch (action.type) {

        case Details_Action: {

            return {
                ...state,
                loading: true,
                status: "fail",
            }
        }
        case Details_Action_Success: {

            return {
                ...state,
                data: action?.payload?.data,
                loading: false,
                status: "success"
            }
        }
        case Details_Action_Failure: {

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



export { DetailsReducer };
