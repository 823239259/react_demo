import React, {Component} from 'react'
import axios from 'axios'
export default class MostStarRepo extends Component {

    state = {
        repoName: '',
        repoUrl: ''
    }
    componentDidMount () {
        //发送 ajax请求
        const url = `https://api.github.com/search1/repositories?q=r&sort=stars`
        axios.get(url).then((response)=>{
            const result =  response.data
            console.log(result);
            const {name, html_url} = result.items[0]
            this.setState({
                repoName:name,
                repoUrl: html_url
            })
        })
        .catch(err=>{
            console.log(err);
            
        })

        //fetch请求
        // fetch(url).then((response)=>{
        //     return response.json()
        // }).then(data => {
        //     console.log(data)
        //     const {name, html_url} = data.items[0]
        //     this.setState({
        //         repoName:name,
        //         repoUrl: html_url
        //     })
        // })
    }
    render() {
        const {repoName, repoUrl} = this.state
        if (!repoName) {
            return  <h2>LOADING...</h2>
        } else {
            return  <h2>最受欢迎的项目是<a href={repoUrl}>{repoName}</a></h2>
        }
        
    }
}
