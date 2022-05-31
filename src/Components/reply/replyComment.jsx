import { useContext, useState } from 'react';
import { CommentsContext } from '../../contexts/comments.context';
import Button from '../buttons/button.component';
import Reply from './reply.component';
const ReplyComment = ({ reply, setReplies, replies }) => {
    const { user, score, createdAt, content, id } = reply;
    const { replyHost, setReplyHost } = useContext(CommentsContext);
    const [activeReply, setActiveReply] = useState(false);
    const replyHandler = () => {
        // setReplyHost(id);
        setActiveReply(true);
    };
    return (
        <>
            {' '}
            <div key={id}>
                <div className='votes-container'>
                    <Button />
                    <span>{score}</span>
                    <Button />
                </div>
                <div className='comment-content-container'>
                    <header>
                        <img
                            width='100px'
                            src={require(`../../assets/images/avatars/image-${user.username}.png`)}
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
            {activeReply && (
                <Reply
                    replies={replies}
                    username={user.username}
                    setReplies={setReplies}
                    setActiveReply={setActiveReply}
                />
            )}
        </>
    );
};

export default ReplyComment;
