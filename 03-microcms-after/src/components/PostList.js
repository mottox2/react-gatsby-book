import React from "react"
import PostCell from "./PostCell";

const PostList = props => {
  return (
    <>
      {props.posts.map(post => {
        return <PostCell post={post} key={post.slug} />
      })}
    </>
  )
}

export default PostList
