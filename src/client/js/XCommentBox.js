class XCommentBox extends React.Component {

    constructor(){
        super();
        this.state = {
            showComments: false,
            comments: [
                {id:1, author: "Deepika", body: "Hi everyone"},
                {id:2, author: "Daksh", body: "Hello"},
                {id:3, author: "Vaibhav", body: "Hey"}]
        };
    }

    render(){
        let comments = this._getComments();
        let commentNodes;
        if(this.state.showComments) {
            commentNodes = <div id="comments">{comments}</div>;
        }
        return(
          <div>
            <CommentForm addComment={this._addComment.bind(this)} />
            <div className="comment-header row">
              <h1 className="comment-title col-sm-6">{this._getCommentsTitle(this.state.comments.length)}</h1>
              <div className="col-sm-6">
                <button className="show-hide-comments-button btn btn-lg btn-warning" onClick={this._handleButtonClick.bind(this)}>
                    {this._getButtonText()}
                </button>
              </div>
            </div>
              {commentNodes}
          </div>
        );
    }

    _getComments(){

        return this.state.comments.map(comment =>
            <Comment author={comment.author} body={comment.body} key={comment.id} />
        );
    }

    _getCommentsTitle(commentCount){
        if(commentCount === 0){
            return 'No Comments yet';
        }
        else if(commentCount === 1){
            return '1 Comment';
        }
        else {
            return `${commentCount} Comments`;
        }
    }

    _getButtonText(){
        if(this.state.showComments){
            return 'Hide Comments';
        }
        else{
            return 'Show Comments';
        }
    }

    _handleButtonClick(){
        this.setState({showComments: !this.state.showComments});
    }

    _addComment(author, body){
        let comment = {id: this.state.comments.length + 1, author, body}
        this.setState({comments: this.state.comments.concat([comment])});
    }
}

ReactDOM.render(<XCommentBox />, document.getElementById('commentBox'));