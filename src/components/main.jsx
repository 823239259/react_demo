import React, {Component} from 'react';
import axios from 'axios'
import PubSub from "pubsub-js";
export default class Main extends Component {

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null,
    }
    //当接收到新的属性值时候回调
    
    componentDidMount () {
        PubSub.subscribe('search',(msg,data)=>{
            this.setState({
                initView: false,
                loading: true
            })
            const url = `https://api.github.com/search/users?q=${data}`
        axios.get(url)
            .then(response => {
                const result =  response.data
                console.log(result);
                const users = result.items.map(item =>{
                    return {
                        name: item.login,
                        url: item.html_url,
                        avatarUrl: item.avatar_url
                    }
                })
                
                this.setState({
                    loading: false,
                    users

                })
                
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    errorMsg: '请求异常'

                })
            })
        })
    }

    render() {
        const {initView, loading, users, errorMsg} = this.state
        const {searchName} = this.props
        if (initView) {
            return <h2>请输入搜索的关键字{searchName}</h2>
        }else if(loading) {
            return <h2>正在请求中...</h2>
        }else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        }else {
            return (
                <div className="row">
                {
                    users.map((user,index) =>{
                        return (
                                <div className="card" key={index}>
                                    <a href={user.url} target="_blank">
                                        <img
                                            src={user.avatarUrl}
                                            alt = {index}
                                            style={{
                                            width: 100
                                        }}/>
                                    </a>
                                    <p className="card-text">{user.name}</p>
                                </div>
                        )
                    })
                }
                </div>
            )
        }
        
    }
};
