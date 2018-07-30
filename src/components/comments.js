import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';



class CommentBox extends React.Component{
    constructor (props){
        super (props);
        this.state ={
            author: "",
            text: ""
        }
    }
       addComments = () => {
           this.baseUrl =`http://localhost:3001/com`;
           const blogcom ={
               author: this.state.author,
               text: this.state.text
           };

           fetch(this.baseUrl, {
                   method: 'POST',
                   body: JSON.stringify( blogcom ),
                   headers: {
                       'Content-Type': 'application/json'
                   }
               })

            .then(res => {
               if (res.ok)
                   return res.json();
               else
                   throw new Error('bład POST');
           })
               .then(() => console.log('działa'))
               .catch(err => console.log(err));
       };

    handleNameChange = (event) => {
        this.setState
        ({author: event.target.value});
    };

    handleTextChange = (event) => {
        this.setState
        ({text: event.target.value});
    };


    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="commentBox">
                        <h2 className="commentAdd">Dodaj komentarz</h2>
                    <input className="commentName" id='author'
                           type="text"
                           placeholder='Podpis'
                           onChange={this.handleNameChange}
                           value={this.state.author}
                    />
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                    <textarea className="commentText" id="text"
                              placeholder='Dodaj komentarz'
                              value={this.state.text}
                              onChange={this.handleTextChange}/>

                    <button className="commentButton" type='submit' onClick={this.addComments}>Dodaj komentarz</button>
                    </div>
                </form>
                <Comment/>
            </div>
        )
}
}


class Comment extends React.Component{
    constructor (props){
        super (props);
        this.state={
            loading: true
        };
        this.baseUrl="http://localhost:3001/com"
    }

    componentDidMount () {

        fetch(this.baseUrl) //łączymy sie z bazowym url
            .then(resp => {
                if (resp.ok)
                    return resp.json(); //zczytujemy json
                else
                    throw new Error("Bład sieci!")
            }).then(data => {
            console.log(data);
            this.setState({
                loading: false,
                data, //wrzucamy dane w dataSet, gdy się uruchomi - uruchamia ponownie metodę renderującą

            })
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        if (this.state.loading) {
            return <h2>ładuję ...</h2>
        }

        const comments = this.state.data.map((com, i) => {
            return (
                <li key={com.id}>
                    <h2>{com.author}</h2>
                    <h3>{com.text}</h3>
                </li>
            )
        });
        return <div>
            <ul>{comments}</ul>
        </div>;
    }

}

export default CommentBox