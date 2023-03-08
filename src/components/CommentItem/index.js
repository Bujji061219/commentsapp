const CommentItem = props => {
  const {eachItem} = props
  const {nameInput, commentInput} = eachItem
  return (
    <li>
      <h1>{nameInput}</h1>
      <p>{commentInput}</p>
    </li>
  )
}

export default CommentItem
