import { useContext } from 'react';
import { CommentsContext } from '../../contexts/comments.context';
import Comment from '../comment-item/comment.component';
import Reply from './reply.component';
const Replies = ({ replies, replyHost, activeReply, setActiveReply }) => {
    return (
        <>
            {replies && (
                <div className='replies-container'>
                    {replies.map((replyObj) => (
                        <Comment comment={replyObj} />
                    ))}
                </div>
            )}
       
        </>
    );
};

export default Replies;
