import React, {Component} from 'react'
import CommentAdd from '../comment_add/comment_add'
import CommentList from '../comment_list/comment_list'
import MostStarRepo from '../ajax/test'

export default class App extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      comments: [
    //          {
    //              username: 'Tom',
    //              content: 'React挺好的!'
    //          },
    //          {
    //             username: 'Jack',
    //             content: 'React有点难!'
    //         }
    //      ]
    //   };
    // };
    //给组件添加state对象(实例)属性
    state = {
        comments: [
            {
                username: 'Tom',
                content: 'React挺好的!'
            },
            {
               username: 'Jack',
               content: 'React有点难!'
           }
        ]
    }
    addComment = (comment)=>{
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({
            comments
        })
    }
    deleteComment = (index)=>{
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({
            comments
        })
    }
    render() {
        const {comments} = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div> 
                    </div>
                </header>
                <div className="container row">
                    <CommentAdd  addComment = {this.addComment}/>
                    <CommentList comments = {comments}  deleteComment ={this.deleteComment}/>
                </div>
                <div className="container row">
                    <MostStarRepo />
                </div>
            </div>
        )
    }
}        