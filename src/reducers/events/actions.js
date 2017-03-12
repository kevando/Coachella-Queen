import {
  ADD_EVENT,
  REMOVE_EVENT
} from './actionTypes';

export function addEvent(event) {
  return { type: ADD_EVENT, event }
}

export function removeEvent(event) {
  return { type: REMOVE_EVENT, event }
}
