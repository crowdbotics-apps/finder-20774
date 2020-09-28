import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView2113920Saga from '../features/CalendarView2113920/redux/sagas';
import EmailAuth4113918Saga from '../features/EmailAuth4113918/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView2113920Saga,
EmailAuth4113918Saga,
    
  ]);
}