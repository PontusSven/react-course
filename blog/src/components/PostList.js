import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { tsExpressionWithTypeArguments } from "@babel/types";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
