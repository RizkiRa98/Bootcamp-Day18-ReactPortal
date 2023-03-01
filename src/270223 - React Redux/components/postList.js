import React, { Component } from "react";
import { connect } from "react-redux";
import { FaUser } from "react-icons/fa";

//import component yang sudah di fetch di action index
import { fetchPostsAndUsers, fetchPosts } from "../action";
import UserList from "./userList";

// Membuat component PostList untuk di render pada App.js
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  rendeList() {
    return this.props.posts.map((post) => (
      <div key={post.id} className="card">
        <div
          className="content"
          style={{
            border: "3px solid skyblue",
            padding: "10px 0px 10px 10px",
            borderRadius: "5px",
            marginTop: "5px",
            backgroundColor: "#EDE4E0",
          }}
        >
          <div className="d-flex">
            <FaUser />
            <UserList userId={post.userId} />
          </div>
          <div className="description">
            <h2>{post.title}</h2>
          </div>
          <p>{post.body}</p>
        </div>
      </div>
    ));
  }

  render() {
    if (!this.props.posts) {
      return null;
    }
    return <div className="ui relaxed devided list">{this.rendeList()}</div>;
  }
}

// menggunakan mapStateProps untuk mengambil state dari posts
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(
  PostList
);
