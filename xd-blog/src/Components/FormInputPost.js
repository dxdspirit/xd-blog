import React, { Component } from 'react'
import axios from 'axios'
class FormInputPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            type: ''
        }
    }
    handleContentChange = event => {
        this.setState({
            content: event.target.value
        })
    }
    handleTitleChange = event => {
        this.setState({
            title: event.target.value
        })
    }
    handleTypeChange = event => {
        this.setState({
            type: event.target.value
        })
    }
    handleSubmit = event => {
            axios.post('http://luyenthihothanh.edu.vn/cot/insertPost.php', this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })  

    }

    render() {
        const { title, content, type } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Tên bài viết</label>
                        <input type="text"name="title" value={title} onChange={this.handleTitleChange}></input>
                    </div>
                    <div>
                        <label>Nội dung</label>
                        <textarea type="text" name ="content" value={content} onChange={this.handleContentChange}></textarea>

                    </div>
                    <div>
                        <label>Loại bài viết</label>
                        <select value={type} name="type" onChange={this.handleTypeChange}>
                            <option>Ghi chú</option>
                            <option>Kiến thức mới</option>
                            <option>Miêu tả dự án</option>
                        </select>
                    </div>
                    <button type="submit">Thêm bài viết</button>
                </form>
            </div>
        )
    }
}

export default FormInputPost
