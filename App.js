import React from 'react';
import {comments} from './commentData'
import Card from './Card'

function App () {
 const allComments = comments.map(comment => {
    return <Card commentObject={comment} key={comment.comment} />
  })
return allComments;
}

export default App;