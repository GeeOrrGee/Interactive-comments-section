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
    const [replyHostId, setReplyHostId] = useState({
        id: null,
        replyingTo: null,
    });
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

    const getReplyHostElement = (id, username) => {
        console.log(username);
        const commentHostId = commentsState.find(
            (commentObj) => commentObj.id === id
        );
        console.log(commentHostId);
        if (!commentHostId) {
            const [parentElement] = commentsState.filter((commentObj) =>
                commentObj.replies.find((replyObj) => replyObj.id === id)
            );
            console.log(parentElement);
            return setReplyHostId({
                id: parentElement.id,
                replyingTo: username,
            });
        }
        return setReplyHostId({
            id: commentHostId.id,
            replyingTo: username,
        });
    };
    console.log(replyHostId.replyingTo);
    const value = {
        commentsState, // using to display main comments feed
        setComments,
        allCommentsIds, // to store unique comments id array
        setAllCommentsIds,
        getReplyHostElement, // to get the parent element for replying functionality
        replyHostId, //to display addComment component based on the id condition for replying
        setReplyHostId,
    };
    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    );
};

export default CommentsProvider;
