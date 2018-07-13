import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentsItem from '../comment_item/comment_item'
import './comment_list.css'


export default class CommentList extends Component {
    // constructor(props) {
    //   super(props)
    // }
    //类添加属性 es6语法 属于提案阶段 还未完全通过
    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired,
    }
    render() {
        const {comments, deleteComment} = this.props
        const  display = comments.length === 0?'block': 'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{
                    display
                }}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((item,index) => {
                            return (<CommentsItem comment={item} index={index} deleteComment ={deleteComment}  key={index}/>)
                        })
                    }
                </ul>
            </div>
        )
    }
}


