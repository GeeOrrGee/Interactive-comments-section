import { useState, useContext, useEffect } from 'react';
import { CommentsContext } from '../../contexts/comments.context';
import AddComment from '../addComment/addComment-component';
import Comment from '../comment-item/comment.component';
import './replies.styles.scss';

const Replies = ({ replies, currentUser, parentId }) => {
    const { replyHostId } = useContext(CommentsContext);
    
    console.log(replies);
    return (
        <div className='replies-outter'>
            {' '}
            <div className='reply-line'></div>
            <div className='replies-container'>
                {replies.map((reply) => (
                    <Comment
                        currentUser={currentUser.username}
                        comment={reply}
                        comments={replies}
                    />
                ))}
                {parentId === replyHostId && (
                    <AddComment comments={replies} currentUser={currentUser} />
                )}
            </div>
        </div>
    );
};

export default Replies;
