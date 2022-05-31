import { useEffect, useState } from 'react';
import ReplyComment from './replyComment';

const Replies = ({ repliess }) => {
    const [replies, setReplies] = useState([...repliess]);
    console.log(replies);
    return (
        <div>
            {replies.map((replyObj) => (
                <ReplyComment
                    setReplies={setReplies}
                    replies={replies}
                    reply={replyObj}
                />
            ))}
        </div>
    );
};

export default Replies;

//figure out how to manage the commentsreplies
