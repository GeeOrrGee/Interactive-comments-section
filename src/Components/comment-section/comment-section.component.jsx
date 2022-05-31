import { useContext, useState } from 'react';
import { CommentsContext } from '../../contexts/comments.context';
import Comment from '../comment-item/comment.component';
import Reply from '../reply/reply.component';
import './comment-section.styles.scss';

const CommentSection = () => {
    const { commentsCollection } = useContext(CommentsContext);
    const { currentUser } = commentsCollection;
    const { comments } = commentsCollection;

    return (
        <div key={'index'} className='main-section'>
            <div className='comments-container'>
                <>
                    {comments.map((commentObj) => (
                        <div className='comment-outter'>
                            <Comment comment={commentObj} />
                            <></>
                        </div>
                    ))}
                </>
            </div>
        </div>
    );
};

export default CommentSection;
