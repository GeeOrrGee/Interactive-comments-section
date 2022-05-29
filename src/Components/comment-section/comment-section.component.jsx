import { useContext, useState } from 'react';
import { CommentsContext } from '../../contexts/comments.context';
import Comment from '../comment-item/comment.component';
import './comment-section.styles.scss';
import Replies from '../reply/replies.component';
import Reply from '../reply/reply.component';

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
                        <div className='comment-outter'>
                            <Comment comment={commentObj} />
                        </div>
                    ))}
                </>
            </div>
        </div>
    );
};

export default CommentSection;
