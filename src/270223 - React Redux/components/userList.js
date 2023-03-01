import React, { Component } from "react";
import { connect } from "react-redux";

// membuat komponen UserList untuk memanggil name
class UserList extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div className="header" style={{ marginLeft: "5px" }}>
        {user.name}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserList);
