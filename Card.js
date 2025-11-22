import React from 'react';

import Body from './Body'
import Header from './Header'

function Card(props) {
  return (
    <>
    <Header profileImg={props.commentObject.profileImg} username={props.commentObject.username} />
    <Body comment={props.commentObject.comment} />
    </>
  )
}

export default Card
// The attribute name you use when passing a prop to a component can be anything you choose, but it must match exactly when you reference it inside the child component. The name you use in the parent becomes the property name on the props object in the child. Consistency is key. 
// for example <Card commentObject={comment} key={comment.comment} /> ---  <Header profileImg={props.commentObject.profileImg} username={props.commentObject.username} /> // commentObject is attribute for comment then used inside the next component as props.commentObject.username.