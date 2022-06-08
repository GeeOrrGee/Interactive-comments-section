import Comment from '../comment-item/comment.component';
import CommentsData from '../../data.json';
import { useContext, useEffect, useState } from 'react';
import './comment-section.styles.scss';
import AddComment from '../addComment/addComment-component';
import Replies from '../Replies/replies.component';
import { CommentsContext } from '../../contexts/comments.context';
const CommentSection = () => {
    const { comments, currentUser } = CommentsData;
    const { commentsState, setComments, allCommentsIds } =
        useContext(CommentsContext);
    console.log(allCommentsIds);
    // const repliesIdsArr = commentsState
    //     .map((commentObj) => commentObj.replies.map((replyObj) => replyObj.id))
    //     .reduce((pre, cur) => cur.concat(pre));

    // const commentsIdsArr = commentsState.map((commentObj) => commentObj.id);
    // const allCommentsIds = commentsIdsArr.concat(repliesIdsArr); // STORING ALL IDS TO ACCUMULATE YOU NEED GOD DAMN CONTEXT FFS

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
