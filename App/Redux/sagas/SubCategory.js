import { call, put } from 'redux-saga/effects';
import { SubCategory_Api } from '../api/SubCategory';
import { GetSubCategoryAction, GetSubCategoryAction_Success, GetSubCategoryAction_Failure } from '../actions/GetSubCategory';


// Fetch all products in waitlist
export function* SubCategory({ payload }) {
  try {

    const res = yield (SubCategory_Api(payload.data));


    if (res !== undefined) {

      yield put(GetSubCategoryAction_Success(res.Table));
    } else {
      yield put(GetSubCategoryAction_Failure(res.message));
    }

  } catch (error) {
    yield put(GetSubCategoryAction_Failure(error));
  }
}




