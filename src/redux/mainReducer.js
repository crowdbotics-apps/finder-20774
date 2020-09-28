import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView2113920Reducer from '../features/CalendarView2113920/redux/reducers';
import EmailAuth4113918Reducer from '../features/EmailAuth4113918/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView2113920: CalendarView2113920Reducer,
EmailAuth4113918: EmailAuth4113918Reducer,

});