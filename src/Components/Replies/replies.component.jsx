import { useState, useContext } from 'react';
import { CommentsContext } from '../../contexts/comments.context';
import AddComment from '../addComment/addComment-component';
import Comment from '../comment-item/comment.component';
import './replies.styles.scss';

const Replies = ({ replies, currentUser, parentId }) => {
    const { allCommentsIds, getReplyHostElement, commentsState, replyHostId } =
        useContext(CommentsContext);
    const [currentReplies, setCurrentReplies] = useState(replies);
    console.log(replies);
    // ADDING REPLY FROM HERE DOESNT UPDATE THE CONTEXT, ONLY PROBLEM LEFT U BETTER FIX IT
    return (
        <div className='replies-outter'>
            {' '}
            <div className='reply-line'></div>
            <div className='replies-container'>
                {currentReplies.map((reply) => (
                    <Comment
                        currentUser={currentUser.username}
                        comment={reply}
                        setComments={setCurrentReplies}
                        comments={currentReplies}
                    />
                ))}
                {parentId === replyHostId && (
                    <AddComment
                        comments={currentReplies}
                        setComments={setCurrentReplies}
                        currentUser={currentUser}
                    />
                )}
            </div>
        </div>
    );
};

export default Replies;
