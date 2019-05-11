export const increment = id => ({
  type: "INCREMENT",
  id
});

export const createNode = (id, nextId) => ({
  type: "CREATE_NODE",
  childId: nextId,
  id
});

export const addChild = (id, childId) => ({
  type: "ADD_CHILD",
  childId,
  id
});

export const deleteNode = id => ({
  type: "DELETE_NODE",
  id
});
