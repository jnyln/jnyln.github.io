import React, { Component, PropTypes } from 'react';

class CommentForm extends Component {
    handleSubmitCommentForm(e) {
        e.preventDefault();

        const {
            commentForm,
        } = this.refs;
        const {
            onSubmit,
        } = this.props;

        if (!commentForm.value) {
            return;
        }

        onSubmit(commentForm.value);
        commentForm.value = '';
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitCommentForm.bind(this)}>
                <textarea ref="commentForm" className="comment_form"></textarea>
                <input className="comment_submit" type="submit" />
            </form>
        );
    }
};

CommentForm.propTypes = {
    onSubmitCommentForm: PropTypes.func,
};

CommentForm.defaultProps = {
    onSubmitCommentForm: () => {},
};

export default CommentForm;
