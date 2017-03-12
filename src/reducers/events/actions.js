import {
  ADD_EVENT,
  REMOVE_EVENT,
  TOGGLE_EVENT
} from './actionTypes';

export function addEvent(event) {
  return { type: ADD_EVENT, event }
}

export function removeEvent(event) {
  return { type: REMOVE_EVENT, event }
}

export function toggleEvent(event) {
  return { type: TOGGLE_EVENT, event }
}
