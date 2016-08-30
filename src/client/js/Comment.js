class Comment extends React.Component {
    render() {
        return (
            <div className="panel panel-warning comment">
                <div className="panel-heading">{this.props.author}</div>
                <div className="panel-body">{this.props.body}</div>
            </div>
        );
    }
}
