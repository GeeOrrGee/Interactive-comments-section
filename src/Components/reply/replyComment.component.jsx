import Comment from '../comment-item/comment.component';

const ReplyComment = ({ reply }) => {
    console.log(reply);
    return <Comment comment={reply} />;
};

export default ReplyComment;
