import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onSubmits = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const newComment = {
      id: v4(),
      nameInput,
      commentInput,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div>
        <form className="app-container" onSubmit={this.onSubmits}>
          <input value={nameInput} onChange={this.onChangeNameInput} />
          <textarea value={commentInput} onChange={this.onChangeCommentInput} />
          <button type="submit" className="add-button">
            Add Comment
          </button>
        </form>
        <hr className="line" />
        <h1>{commentsList.length}</h1>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem eachItem={eachComment} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
