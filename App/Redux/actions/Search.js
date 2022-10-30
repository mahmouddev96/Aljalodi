import { Search_Action_Failure, Search_Action, Search_Action_Success } from "./actionTypes";

export const SearchAction = (data) => ({

    type: Search_Action,

    payload: {
        data
    }
});

export const SearchAction_Success = (data) => ({

    type: Search_Action_Success,
    payload: {
        data
    }
});
export const SearchAction_Failure = (data) => ({
    type: Search_Action_Failure,
    payload: {
        data
    }
});

