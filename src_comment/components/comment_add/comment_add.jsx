import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'



export default class commentAdd extends PureComponent {

    state = {
        username: '',
        content: ''
    }
    handleSubmit = ()=>{
        //搜集数据,并封装成commit对象
        const comment = this.state
        this.props.addComment(comment)
        this.setState({
            username: '',
            content: ''

        })
    }
    // event 对象会作为最后一个参数传入
    handleChange = (key, event)=>{
        // console.log(key)
        // console.log(event.target.value)
        let value  = event.target.value
        this.setState({
            [key]: value
        })
        console.log(this.state);
        
    }
    static propTypes = {
        addComment: PropTypes.func.isRequired,
    }
    render() {
        const {username, content} = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={username}  onChange= {this.handleChange.bind(this,'username')}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange= {this.handleChange.bind(this,'content')}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form> 
            </div>
        )
    }
}
