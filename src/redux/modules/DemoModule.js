// Actions
const ACTION_TYPE = 'projectName/moduleName/actionType'

// Initial State
const initialState = {}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE:
      return {} // new state
    default:
      return state
  }
}

// Action Creators
export const methodName = (payload) => ({
  type: ACTION_TYPE,
  payload
})
