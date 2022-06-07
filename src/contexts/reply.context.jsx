import { createContext, useState } from 'react';

export const ReplyContext = createContext({
    activeReply: false,
    setActiveReply: () => {},
});

export const ReplyProvider = ({ children }) => {
    const [activeReply, setActiveReply] = useState(false);

    const displayActiveReply = (condition, id) => {};

    const value = { activeReply, setActiveReply };

    return (
        <ReplyContext.Provider value={value}>{children}</ReplyContext.Provider>
    );
};
