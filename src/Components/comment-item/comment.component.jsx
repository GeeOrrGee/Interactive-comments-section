import { useState } from 'react';

import Button from '../buttons/button.component';

import './comment.styles.scss';

const Comment = ({ comment, currentUser, comments, setComments }) => {
    const { createdAt, content, id, score, user } = comment;
    const [commentContent, setContent] = useState(content); //comment update hook
    const [editActive, setEditActive] = useState(false); //edit display hook
    const { image, username } = user;

    // console.log(typeof user.image.png);

    const replyHandler = (event) => {};
    const deleteHandler = () => {
        const filteredComments = comments.filter(
            (commentObj) => commentObj.id !== id
        );
        setComments(filteredComments);
    };

    const defaultTextValue = {
        value: commentContent,
    };
    const [editValue, setEditValue] = useState(defaultTextValue); //form hook
    const onChangeHandler = (event) => {
        setEditValue({ value: event.target.value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (editValue.value.trim() === '') return;
        setContent(editValue.value);
        setEditActive(false);
        console.log(comment); //it doesnt update the origin object content value
    };

    const editHandler = () => {
        setEditActive(true);
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
                        {username === currentUser ? (
                            <>
                                <span>YOU</span>
                                <span>{createdAt}</span>
                                <div className='buttons-container'>
                                    <Button onClick={deleteHandler}>
                                        Delete
                                    </Button>

                                    <Button id={id} onClick={editHandler}>
                                        Edit
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <span>{createdAt}</span>
                                <div className='buttons-container'>
                                    <Button id={id} onClick={replyHandler}>
                                        Reply
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
                            <Button type='submit'>Update</Button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default Comment;
