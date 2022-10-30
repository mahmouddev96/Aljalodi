import { GetCategories_Action, GetCategories_Action_Failure, GetCategories_Action_Success } from "./actionTypes";
// Fetch all product from wishlist
export const GetCategoriesAction = (data) => ({

    type: GetCategories_Action,

    payload: {
        data
    }
});

export const GetCategoriesAction_Success = (data) => ({

    type: GetCategories_Action_Success,
    payload: {
        data
    }
});
export const GetCategoriesAction_Failure = (data) => ({
    type: GetCategories_Action_Failure,
    payload: {
        data
    }
});

