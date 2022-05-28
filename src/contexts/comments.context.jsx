import { createContext, useState } from 'react';
import commentsData from '../data.json';

export const CommentsContext = createContext({
    commentsCollection: [],
});

export const CommentsProvider = ({ children }) => {
    const commentsCollection = commentsData;

    const value = { commentsCollection };

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    );
};
