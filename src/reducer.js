const MyReducer = (state = {}, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "CREATE_NODE":
      return {
        id: action.childId,
        counter: 0,
        childIds: []
      };

    case "ADD_CHILD":
      return { ...state, childIds: [...state.childIds, action.childId] };
    default:
      return state;
  }
};

const Helper = (state = new Map(), action) => {
  if (action.id === undefined) return state;
  const newState = Object.assign(new Map(state), state);
  const toChange = newState.get(action.id);

  if (action.type === "DELETE_NODE") {
    newState.delete(action.id);
    return newState;
  }
  if (action.type === "CREATE_NODE") {
    const child = MyReducer(newState, action);
    newState.set(action.childId, child);
    return newState;
  }
  if (action.type === "ADD_CHILD") {
    const newChilds = MyReducer(newState.get(action.id), action);
    newState.set(action.id, newChilds);
    return newState;
  }
  const changed = MyReducer(toChange, action);
  newState.set(action.id, changed);
  return newState;
};
export default Helper;
