/**
 * ACTION TYPES
 */
const TOGGLE_OBJECT = 'TOGGLE_OBJECT'
//const SET_COORD = 'SET_COORD'

/**
 * INITIAL STATE
 */
const arScreen = {
    showObject: false,
    //latitude: 0,
    //longitude: 0
}

/**
 * ACTION CREATORS
 */
export const toggleObject = (showObjectState) => ({type: TOGGLE_OBJECT, showObjectState})
//export const setCoord = (lat, long) => ({type: SET_COORD, lat, long})


/**
 * REDUCER
 */
export default function(state = arScreen, action) {
  switch (action.type) {
    case TOGGLE_OBJECT:
      return {...state, showObject: action.showObjectState}
    //case SET_COORD:
    //  return {...state, latitude: action.lat, longitude: action.long}
    default:
      return state
  }
}
