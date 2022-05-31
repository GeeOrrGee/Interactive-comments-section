import TimeAgo from 'javascript-time-ago';
import { useContext, useState, useEffect } from 'react';
import { CommentsContext } from '../../contexts/comments.context';

import Button from '../buttons/button.component';
import Comment from '../comment-item/comment.component';

const Reply = ({ username, replies, setReplies, setActiveReply }) => {
    const replyDefaultText = {
        value: `@${username}`,
    };
    //////////
    const { commentsCollection, setReplyHost } = useContext(CommentsContext);
    const { currentUser, comments } = commentsCollection;
    // console.log(comments);
    // const { commentObj } = comments;

    // console.log(comments);
    const [replyText, setReplyText] = useState(replyDefaultText);

    const eventChangeHandler = (event) => {
        const { value } = event.target;
        setReplyText({ value }); // value: value
    };

    const newReply = {
        content: replyText.value,
        user: currentUser,
        replyingTo: username,
        score: 0,
        createdAt: 'time ago',
    };

    const replyHandler = (event) => {
        setReplyHost(null);
        setReplies([...replies, newReply]);
        console.log(replies);
        setActiveReply(false);
    };

    console.log();

    return (
        <>
            {
                <div className='reply-container'>
                    <img
                        src={require(`../../assets/images/avatars/image-${currentUser.username}.png`)}
                        alt={currentUser.username}
                    />
                    <textarea
                        onChange={eventChangeHandler}
                        value={`${replyText.value}`}
                    ></textarea>
                    <Button onClick={replyHandler} />
                </div>
            }

            {/* {<ReplyComment reply={newReply} />} */}
        </>
    );
};

export default Reply;
