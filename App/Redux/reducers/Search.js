import { Search_Action, Search_Action_Failure, Search_Action_Success } from "../actions/actionTypes";



const initialState = {
    data: {},
    loading: false,
    error: null


};

const Search = (state = initialState, action) => {
//console.log('fromreducer',action?.payload)
    switch (action.type) {

        case Search_Action: {

            return {
                ...state,
                loading: true,
                status: "fail",
            }
        }
        case Search_Action_Success: {

            return {
                ...state,
                data: action?.payload?.data,
                loading: false,
                status: "success"
            }
        }
        case Search_Action_Failure: {

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



export { Search };
