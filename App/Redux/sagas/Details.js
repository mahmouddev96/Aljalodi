import { call, put } from 'redux-saga/effects';
import { Details_Api } from '../api/Details';
import { DetailsAction, DetailsAction_Failure, DetailsAction_Success } from '../actions/Details';


// Fetch all products in waitlist
export function* Details({ payload }) {
  try {

    const res = yield (Details_Api(payload.data));


    if (res !== undefined) {

      yield put(DetailsAction_Success(res.Table));
    } else {
      yield put(DetailsAction_Failure(res.message));
    }

  } catch (error) {
    yield put(DetailsAction_Failure(error));
  }
}




