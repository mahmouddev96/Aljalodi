
import {
  takeEvery,
  spawn,
} from 'redux-saga/effects';
import {
  GetCategories_Action,
  GetSubCategory_Action,
  Search_Action,
  Details_Action
} from '../actions/actionTypes';

import { Register } from './registerSaga';
import { Categories } from './Categories';
import { SubCategory } from './SubCategory';
import { Search } from './Search';
import { Details } from './Details';
const watchLogin = function* watchLogin() {
  //* USER_CALLS */
  yield takeEvery(GetCategories_Action, Categories);
  yield takeEvery(GetSubCategory_Action, SubCategory);
  yield takeEvery(Search_Action, Search);
  yield takeEvery(Details_Action, Details);
};

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
const Sagas = function* mySagas() {
  yield watchLogin();

};
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default Sagas;