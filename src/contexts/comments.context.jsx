import { createContext, useState } from 'react';
import commentsData from '../data.json';

export const CommentsContext = createContext({
    commentsCollection: [],
    replyHost: null,
});

export const CommentsProvider = ({ children }) => {
    const commentsCollection = commentsData;
    const [replyHost, setReplyHost] = useState(null);
    const value = { commentsCollection, replyHost, setReplyHost };

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    );
};
