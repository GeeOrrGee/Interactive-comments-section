import { useState, useContext } from 'react';
import Comment from '../comment-item/comment.component';
import './replies.styles.scss';
import { ReplyContext } from '../../contexts/reply.context';
import ActiveReply from '../activeReply/activeReply.component';
const Replies = ({ replies, currentUser }) => {
    const [currentReplies, setCurrentReplies] = useState(replies);
    const { activeReply, setActiveReply } = useContext(ReplyContext);
    // console.log(currentUser);
    return (
        <div className='replies-outter'>
            {' '}
            <div className='reply-line'></div>
            <div className='replies-container'>
                {currentReplies.map((reply) => (
                    <Comment currentUser={currentUser} comment={reply} />
                ))}
                {activeReply && <ActiveReply />}
            </div>
        </div>
    );
};

export default Replies;
