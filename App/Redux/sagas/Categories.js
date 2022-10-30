import { call, put } from 'redux-saga/effects';
import { Categories_Api } from '../api/Categories';
import { GetCategoriesAction, GetCategoriesAction_Success, GetCategoriesAction_Failure } from '../actions/GetCategories';


// Fetch all products in waitlist
export function* Categories({ payload }) {
  try {

    const res = yield (Categories_Api(payload.data));


    if (res !== undefined) {

      yield put(GetCategoriesAction_Success(res.Table));
    } else {
      yield put(GetCategoriesAction_Failure(res.message));
    }

  } catch (error) {
    yield put(GetCategoriesAction_Failure(error));
  }
}




