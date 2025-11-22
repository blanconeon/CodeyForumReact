import React from 'react';

function Body(props) {
  return <p>{props.comment}</p>
}

export default Body

// that’s correct! In Card, you extract the comment property from the object and pass it to Body as a prop named comment.
//So, in Body, props.comment refers to the value you passed from Card, not directly to the original object. It’s the value of the comment property from the object, now available as props.comment in Body