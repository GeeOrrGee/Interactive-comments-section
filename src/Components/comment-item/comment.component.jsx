import { useContext, useState } from 'react';
import { CommentsContext } from '../../contexts/comments.context';
import Button from '../buttons/button.component';
import Replies from '../reply/replies.component';
import Reply from '../reply/reply.component';

import './comment.styles.scss';

const Comment = ({ comment }) => {
    const { createdAt, content, id, score, user } = comment;
    const { image, username } = user;
    const { replyHost, setReplyHost } = useContext(CommentsContext);
    // console.log(typeof user.image.png);
    const replyHandler = (event) => {
        setReplyHost(id);
    };

    return (
        <>
            <div key={id} className='comment-container'>
                <div className='votes-container'>
                    <Button />
                    <span>{score}</span>
                    <Button />
                </div>
                <div className='comment-content-container'>
                    <header>
                        <img
                            width='100px'
                            src={require(`../../assets/images/avatars/image-${username}.png`)}
                            // src={require(user.image.png)}
                            alt={user.username}
                        />
                        <span>{user.username}</span>
                        <span>{createdAt}</span>
                        <Button id={id} onClick={replyHandler} />
                    </header>
                    <div className='content'>{content}</div>
                </div>
            </div>
            <Replies repliess={comment.replies} />
            {id === replyHost && <Reply username={username} />}
        </>
    );
};

export default Comment;
