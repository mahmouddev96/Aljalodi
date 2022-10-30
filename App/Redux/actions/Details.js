import { Details_Action, Details_Action_Failure, Details_Action_Success } from "./actionTypes";

export const DetailsAction = (data) => ({

    type: Details_Action,

    payload: {
        data
    }
});

export const DetailsAction_Success = (data) => ({

    type: Details_Action_Success,
    payload: {
        data
    }
});
export const DetailsAction_Failure = (data) => ({
    type: Details_Action_Failure,
    payload: {
        data
    }
});

