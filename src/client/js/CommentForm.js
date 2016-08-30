class CommentForm extends React.Component {

    render(){
        return(
            <div className="comment-form">
                <form onSubmit={this._addComment.bind(this)}>
                    <div className="form-group">
                        <h3 className="white-text">New Comment</h3>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" ref={(name) => this._name = name} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Comment" ref={(comment) => this._comment = comment} />
                    </div>
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        );
    }

    _addComment(event){
        event.preventDefault();
        let name = this._name;
        let comment = this._comment;
        this.props.addComment(name.value, comment.value);
    }

}