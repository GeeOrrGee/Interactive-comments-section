import { useContext, useState } from 'react';
import { CommentsContext } from '../../contexts/comments.context';
import Button from '../buttons/button.component';
import Reply from '../reply/reply.component';
import ReplyComment from '../reply/replyComment.component';
import './comment.styles.scss';

const Comment = ({ comment }) => {
    const { createdAt, content, id, score, user } = comment;
    const { image, username } = user;

    const [activeReply, setActiveReply] = useState(false);

    // console.log(typeof user.image.png);
    const replyHandler = (event) => {
        setActiveReply(true);
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
                        <Button onClick={replyHandler} />
                    </header>
                    <div className='content'>{content}</div>
                </div>
            </div>

            <Reply
                activeReply={activeReply}
                setActiveReply={setActiveReply}
                replyHost={username}
            />
        </>
    );
}; //figure out how to display active reply  for a SINGLE COMMENT

export default Comment;
