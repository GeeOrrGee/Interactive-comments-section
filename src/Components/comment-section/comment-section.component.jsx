import Comment from '../comment-item/comment.component';
import CommentsData from '../../data.json';
import { useContext, } from 'react';
import './comment-section.styles.scss';
import AddComment from '../addComment/addComment-component';
import Replies from '../Replies/replies.component';
import { CommentsContext } from '../../contexts/comments.context';
const CommentSection = () => {
    const { currentUser } = CommentsData;
    const { commentsState, setComments } =
        useContext(CommentsContext);

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
                                currentUser={currentUser}
                                replies={commentObj.replies}
                                parentId={commentObj.id}
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
