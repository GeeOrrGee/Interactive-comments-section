import Comment from '../comment-item/comment.component';
import CommentsData from '../../data.json';
import { useState } from 'react';
import './comment-section.styles.scss';
import AddComment from '../addComment/addComment-component';
import Replies from '../Replies/replies.component';
const CommentSection = () => {
    const { comments, currentUser } = CommentsData;
    const [commentsState, setComments] = useState(comments);
    // console.log(currentUser);
    return (
        <div key={'index'} className='main-section'>
            <div className='comments-container'>
                {commentsState.map((commentObj) => {
                    return (
                        <div className='comment-outter'>
                            <Comment
                                comment={commentObj}
                                currentUser={currentUser.username}
                                comments={commentsState}
                                setComments={setComments}
                            />
                            <Replies
                                currentUser={currentUser.username}
                                replies={commentObj.replies}
                            />
                        </div>
                    );
                })}
            </div>
            <AddComment
                comments={commentsState}
                setComments={setComments}
                currentUser={currentUser}
            />
        </div>
    );
};

export default CommentSection;
