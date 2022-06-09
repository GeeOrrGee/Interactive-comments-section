import { useContext, useEffect, useState } from 'react';

import Button from '../buttons/button.component';

import './comment.styles.scss';
import DeleteModal from '../deleteModal/delete-modal.component';
import { CommentsContext } from '../../contexts/comments.context';
const Comment = ({
    comment,
    currentUser,
    comments,
    setComments,
    currentReplies,
    setCurrentReplies,
}) => {
    const { createdAt, content, id, score, user } = comment;
    const [commentContent, setContent] = useState(content); //comment update hook
    const [editActive, setEditActive] = useState(false); //edit display hook
    const { image, username } = user;
    const { getReplyHostElement, setReplyHostId } = useContext(CommentsContext);

    // console.log(typeof user.image.png);
    const [deleteModalActive, setDeleteModal] = useState(false);
    const deleteHandler = () => {
        setDeleteModal(true);
    };

    const defaultTextValue = {
        value: commentContent,
    };
    const [editValue, setEditValue] = useState(defaultTextValue); //form hook
    const onChangeHandler = (event) => {
        setEditValue({ value: event.target.value });
    };
    // console.log(typeof comment);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (editValue.value.trim() === '') return;
        setContent(editValue.value);
        Object.keys(comment).forEach((key) => {
            if (key !== 'content') return;
            comment.content = editValue.value; //wtf? with state value it updates way later than this
        });
        setEditActive(false);
    };

    const editHandler = () => {
        setEditActive(true);
    };

    const [initialScore, setScore] = useState(score);

    const incrementHandler = (event) => {
        // voteState.upvote && event.target.classList.remove('activeVoteBtn');

        if (initialScore === score + 1) {
            return setScore(score);
        }
        setScore(score + 1);
    };

    const decrementHandler = (event) => {
        if (initialScore === score - 1) {
            return setScore(score);
        }
        setScore(score - 1);
    };

    const replyHandler = (event) => {
        getReplyHostElement(id);

        // setReplyHostId(parentElement.id);
    };
    return (
        <>
            {deleteModalActive && (
                <DeleteModal
                    setDeleteModal={setDeleteModal}
                    comments={comments}
                    id={id}
                />
            )}
            <div key={id} className='comment-container'>
                <div className='votes-container'>
                    <Button onClick={incrementHandler} btnType='vote'>
                        +
                    </Button>
                    <span>{initialScore}</span>
                    <Button onClick={decrementHandler} btnType='vote'>
                        &#8211;
                    </Button>
                </div>
                <div className='comment-content-container'>
                    <header>
                        <img
                            width='100px'
                            src={require(`../../assets/images/avatars/image-${username}.png`)}
                            // src={require(user.image.png)}
                            alt={user.username}
                        />
                        <span className='username'>{user.username}</span>
                        {username === currentUser ? (
                            <>
                                <span className='you'>you</span>
                                <span>{createdAt}</span>
                                <div className='buttons-container'>
                                    <Button
                                        btnType='delete'
                                        onClick={deleteHandler}
                                    >
                                        Delete
                                    </Button>

                                    <Button
                                        id={id}
                                        btnType='reply'
                                        onClick={editHandler}
                                    >
                                        &#9998; Edit
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <span>{createdAt}</span>
                                <div className='buttons-container'>
                                    <Button
                                        id={id}
                                        btnType='reply'
                                        onClick={replyHandler}
                                    >
                                        &#8618; Reply
                                    </Button>
                                </div>
                            </>
                        )}
                    </header>
                    {!editActive ? (
                        <div className='content'>{commentContent}</div>
                    ) : (
                        <form className='edit-form' onSubmit={onSubmitHandler}>
                            {' '}
                            <textarea
                                onChange={onChangeHandler}
                                value={editValue.value}
                            ></textarea>
                            <Button btnType='submit'>Update</Button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default Comment;
