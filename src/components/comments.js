import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
//
// class Comment extends React.Component {
//     constructor (props){
//         super (props);
//     }
//     render (){
//         return (
//             <div className="comment">
//                 <h2 className="commentAuthor">
//                     {this.props.author}
//                 </h2>
//                 {this.props.text}
//             </div>
//         )
//     }
// }

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
                    <div>
                    <input id='author'
                           type="text"
                           placeholder='podaj imię'
                           onChange={this.handleNameChange}
                           value={this.state.author}/>

                    <textarea id="text"
                              placeholder='komentarz'
                              value={this.state.text}
                              onChange={this.handleTextChange}/>

                    <button type='submit' onClick={this.addComments}>Dodaj komentarz</button>
                    </div>
                </form>
                {/*<Comment author={<h1>{this.state.author}</h1>}*/}
                {/*text={<p>{this.state.text}</p>}/>*/}
            </div>


        )
}
}





// // WYŚWIETLENIE BAZY DANYCH
// class CommentBox extends React.Component{
//     constructor (props){
//         super (props);
//         this.state={
//             loading: true
//         };
//         this.baseUrl="http://localhost:3001/comments"
//     }
//    
//     componentDidMount (){
//         fetch(this.baseUrl) //łączymy sie z bazowym url
//             .then(resp => {
//                 if (resp.ok)
//                     return resp.json(); //zczytujemy json
//                 else
//                     throw new Error("Bład sieci!")
//             }).then(data => {
//             console.log(data);
//             this.setState({
//                 loading: false,
//                 data, //wrzucamy dane w dataSet, gdy się uruchomii - uruchaia ponownie metodę renderującą
//
//             })
//         }).catch(err => {
//             console.log(err);
//         });
//     }
//
//     render() {
//         if (this.state.loading) {
//             return <h2>ładuję ...</h2>
//         }
//
//         const comments = this.state.data.map((user, i) => {
//             return (
//                 <li key={user.author}>
//                     <h3>{user.text}</h3>
//                  
//                     {/*<button onClick={() => this.deleteCar(car.id, i)}>sprzedany</button>*/}
//                 </li>
//             )
//         });
//         return <div>
//             <ul>{comments}</ul>
//         </div>;
//     }
//    
// }

// class Comment extends React.Component {
//     constructor (props){
//         super (props);
//     }
//     render (){
//         return (
//             <div className="comment">
//                 <h2 className="commentAuthor">
//                     {this.props.author}
//                 </h2>
//                 {this.props.children}
//             </div>
//         )
//     }
// }
//
// class CommentForm extends React.Component {
//     constructor (props){
//         super (props);
//     }
//     render (){
//         return (
//             <div className="commentForm">
//                 Hello two!
//             </div>
//         )
//     }
// }
//
// class CommentList extends React.Component {
//     constructor (props){
//         super (props);
//     }
//
//     render (){
//         return (
//                 <div className="commentList">
//                     <Comment author="Pete Hunt">This is one comment</Comment>
//                     <Comment author="Jordan Walke">This is *another* comment</Comment>
//                 </div>
//         )
//     }
// }
//
// class CommentBox extends React.Component {
//     constructor (props){
//         super (props);
//     }
//     render (){
//         return (
//             <div className="commentBox">
//                 <h1>Comments</h1>
//                 <CommentList comments= {this.props.data}/>
//                 <CommentForm />
//             </div>
//         )
//     }
// }



export default CommentBox