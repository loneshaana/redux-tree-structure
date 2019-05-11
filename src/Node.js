import React from "react";
import { connect } from "react-redux";
import { increment, createNode, addChild, deleteNode } from "./actions";
let nextId = 0;
class Node extends React.Component {
  renderChild = childIds => {
    console.log("Child Id " + childIds);
    const { id } = this.props;
    return (
      <ul key={childIds}>
        <li style={{ marginLeft: 25, listStyle: "none" }}>
          <ConnectedNode id={childIds} parentId={id} />
        </li>
      </ul>
    );
  };

  addChild = id => {
    const { createNode } = this.props;
    const newid = `new_${nextId++}`;
    createNode(id, newid);
    this.props.addChild(id, newid);
  };

  render() {
    const { node, _increment, parentId, deleteNode } = this.props;
    if (node === undefined) return <React.Fragment />;
    const { childIds, counter, id } = node;
    return (
      <div>
        Counter:{counter}
        <button onClick={() => _increment(id)}>+</button>
        {parentId !== undefined && (
          <p className="delete" onClick={() => deleteNode(id)}>
            ×
          </p>
        )}
        {childIds.map(this.renderChild)}
        <p className="link" onClick={() => this.addChild(id)}>
          Add Child
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  node: state.get(ownProps.id)
});

const mapDispatchToProps = dispatch => ({
  _increment: id => dispatch(increment(id)),
  createNode: (id, newId) => dispatch(createNode(id, newId)),
  addChild: (id, newId) => dispatch(addChild(id, newId)),
  deleteNode: id => dispatch(deleteNode(id))
});
const ConnectedNode = connect(
  mapStateToProps,
  mapDispatchToProps
)(Node);
export default ConnectedNode;
