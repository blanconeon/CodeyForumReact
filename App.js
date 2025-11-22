import React from 'react';
import {comments} from './commentData'
import Card from './Card'

function App () {
 const allComments = comments.map(comment => {
    return <Card commentObject={comment} key={comment.comment} /> //allComments value  is 3 Card instances, commentObject={comment}, each representig one object// Key={comment.comment} is only for React to help it track each Card in the list and is not passed to the Card component itself. 
  })
return allComments;
}

export default App;