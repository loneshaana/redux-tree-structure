let tree = {
  id: 0,
  counter: 0,
  childIds: []
};

const InitialState = new Map();
InitialState.set(0, tree);

for (let i = 1; i < 6; i++) {
  let parrentId = Math.floor(Math.pow(Math.random(), 2) * i);

  let node = {
    id: i,
    counter: 0,
    childIds: []
  };

  InitialState.set(i, node);
  InitialState.get(parrentId).childIds.push(i);
}

export default InitialState;
