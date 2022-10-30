import { call, put } from 'redux-saga/effects';
import { Search_Api } from '../api/Search';
import { SearchAction, SearchAction_Failure, SearchAction_Success } from '../actions/Search';


// Fetch all products in waitlist
export function* Search({ payload }) {
  try {

    const res = yield (Search_Api(payload.data));


    if (res !== undefined) {

      yield put(SearchAction_Success(res.Table));
    } else {
      yield put(SearchAction_Failure(res.message));
    }

  } catch (error) {
    yield put(SearchAction_Failure(error));
  }
}




