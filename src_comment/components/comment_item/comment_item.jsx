import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './comment_item.css'

export default class CommentsItem extends Component {
    // constructor(props) {
    //     super(props)
    // }

    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
    }
    handleClick = (event)=>{
        event.preventDefault();
        const {comment,deleteComment,index} = this.props
        if (window.confirm(`确定是否要删除${comment.username}评论`)) {
            deleteComment(index)
        }
        
    }
    
    render() {
        const {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a onClick={this.handleClick}>删除</a>
                </div>
                <p className="user">
                    <span >{comment.username}</span>
                    <span>说:</span>
                </p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
