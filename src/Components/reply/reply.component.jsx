import TimeAgo from 'javascript-time-ago';
import { useContext, useState, useEffect } from 'react';
import { CommentsContext } from '../../contexts/comments.context';

import Button from '../buttons/button.component';
import Comment from '../comment-item/comment.component';
import ReplyComment from './replyComment.component';
const Reply = ({ activeReply, replyHost, setActiveReply }) => {
    const replyDefaultText = {
        value: `@${replyHost}`,
    };
    //////////
    const { commentsCollection } = useContext(CommentsContext);
    const { currentUser, comments } = commentsCollection;
    console.log(comments);
    // const { commentObj } = comments;
    const replyHostArr = comments.filter(
        (commentObj) => commentObj.user.username !== replyHost
    );

    const [replyHostObj] = replyHostArr;

    // console.log(comments);
    const [replyText, setReplyText] = useState(replyDefaultText);

    const eventChangeHandler = (event) => {
        const { value } = event.target;
        setReplyText({ value }); // value: value
    };

    const newReply = {
        content: replyText.value,
        user: currentUser,
        replyingTo: replyHost,
        score: 0,
        createdAt: 'time ago',
    };

    const replyCommentHandler = (event) => {
        setActiveReply(false);

        replyHostObj.replies.push(newReply);
        setReplyText(replyDefaultText);
    };

    console.log(replyHostObj);
    const hostRepliesArray = !replyHostObj.replies
        ? comments.find(
              (commentObj) =>
                  replyHostObj.replyingTo === commentObj.user.username
          ).replies
        : replyHostObj.replies;

    return (
        <>
            {activeReply && (
                <div className='reply-container'>
                    <img
                        src={require(`../../assets/images/avatars/image-${currentUser.username}.png`)}
                        alt={currentUser.username}
                    />
                    <textarea
                        onChange={eventChangeHandler}
                        value={`${replyText.value}`}
                    ></textarea>
                    <Button onClick={replyCommentHandler} />
                </div>
            )}
            {hostRepliesArray.map((reply) => (
                <Comment comment={reply} />
            ))}
        </>
    );
};

export default Reply;
