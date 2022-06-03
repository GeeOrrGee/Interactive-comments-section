import { useState } from 'react';

import Button from '../buttons/button.component';

import './comment.styles.scss';

const Comment = ({ comment, currentUser, comments, setComments }) => {
    const { createdAt, content, id, score, user } = comment;

    const { image, username } = user;

    // console.log(typeof user.image.png);

    const replyHandler = (event) => {};
    const deleteHandler = () => {
        const filteredComments = comments.filter(
            (commentObj) => commentObj.id !== id
        );
        setComments(filteredComments);
    };

    const editHandler = () => {};

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
                    <div className='content'>{content}</div>
                    {/* ^^ render here EDITCOMPONENT conditionally, try setting local state and passing it to the edit component, general comments array may not update so fix that too */}
                </div>
            </div>
        </>
    );
};

export default Comment;
