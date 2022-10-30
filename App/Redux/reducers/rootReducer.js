import {combineReducers} from 'redux';
import {CategoriesReducer} from './Categories';
import {SubCategory} from './SubCategory';
import {Search} from './Search';
import {DetailsReducer} from './Details';
import favReducer from './favReducer';
const appReducer = combineReducers({
  CategoriesReducer: CategoriesReducer,
  SubCategory: SubCategory,
  Search: Search,
  DetailsReducer: DetailsReducer,
  fav: favReducer,
});
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
