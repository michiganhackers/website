/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

const defaultArrayState = {
  fetching: false,
  fetched: false,
  error: null,
  data: []
};

function eventsReducer(state = defaultArrayState, action) {
  switch (action.type) {
    case 'EVENTS_REQUEST':
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    case 'EVENTS_FAILURE':
      return {
        ...state,
        error: action.error,
        fetching: false,
        fetched: false
      };
    case 'EVENTS_SUCCESS':
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data
      };
    default:
      return state;
  };
};

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    events: eventsReducer,
    route: routeReducer,
    language: languageProviderReducer,
    ...asyncReducers,
  });
}
