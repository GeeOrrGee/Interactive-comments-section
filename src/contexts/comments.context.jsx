import { createContext, useState } from 'react';

import commentsData from '../data.json';
const { comments } = commentsData;

export const CommentsContext = createContext({
    commentsState: [],
    allCommentsIds: [],
    replyHostId: null,
    setReplyhostId: () => {},
});

const CommentsProvider = ({ children }) => {
    const [commentsState, setComments] = useState(comments);
    const [replyHostId, setReplyhostId] = useState(null);
    // const allReplies = comments.map((commentObj) => commentObj.replies);

    // const repliesIdsArr = commentsState
    //     .map((commentObj) => commentObj.replies.map((replyObj) => replyObj.id))
    //     .reduce((pre, cur) => cur.concat(pre));
    const repliesIdsArr = comments
        .map((commentObj) => commentObj.replies)
        .map((replyArr) => {
            return replyArr.map((replyObj) => replyObj.id);
        })
        .reduce((pre, cur) => cur.concat(pre));

    const commentsIdsArr = commentsState.map((commentObj) => commentObj.id);
    const allCommentsIds1 = commentsIdsArr.concat(repliesIdsArr); // STORING ALL IDS TO ACCUMULATE
    const [allCommentsIds, setAllCommentsIds] = useState(allCommentsIds1);

    const getReplyHostElement = (id) => {
        const commentHostId = commentsState.find(
            (commentObj) => commentObj.id === id
        );
        console.log(commentHostId);
        if (!commentHostId) {
            const [parentElement] = commentsState.filter((commentObj) =>
                commentObj.replies.find((replyObj) => replyObj.id === id)
            );
            console.log(parentElement);
            return setReplyhostId(parentElement.id);
        }
        return setReplyhostId(commentHostId.id);
    };

    const value = {
        commentsState,
        setComments,
        allCommentsIds,
        setAllCommentsIds,
        getReplyHostElement,
        replyHostId,
        setReplyhostId,
    };
    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    );
};

export default CommentsProvider;
