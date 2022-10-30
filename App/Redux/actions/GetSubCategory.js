import { GetSubCategory_Action, GetSubCategory_Action_Failure, GetSubCategory_Action_Success } from "./actionTypes";

export const GetSubCategoryAction = (data) => ({

    type: GetSubCategory_Action,

    payload: {
        data
    }
});

export const GetSubCategoryAction_Success = (data) => ({

    type: GetSubCategory_Action_Success,
    payload: {
        data
    }
});
export const GetSubCategoryAction_Failure = (data) => ({
    type: GetSubCategory_Action_Failure,
    payload: {
        data
    }
});

