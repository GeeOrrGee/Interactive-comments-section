import { useContext } from 'react';
import { CommentsContext } from '../../contexts/comments.context';
import Comment from '../comment-item/comment.component';
import './comment-section.styles.scss';

const CommentSection = () => {
    const { commentsCollection } = useContext(CommentsContext);
    const { currentUser } = commentsCollection;
    const { comments } = commentsCollection;
    // console.log(existingComments);
    // console.log(usrObj);
    // console.log(comments);
    return (
        <div key={'index'} className='main-section'>
            <div className='comments-container'>
                <>
                    {comments.map((commentObj) => (
                        <Comment comment={commentObj} />
                    ))}
                </>
            </div>
        </div>
    );
};

export default CommentSection;
