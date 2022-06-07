import Button from '../buttons/button.component';
import { useState } from 'react';
import './addComment.styles.scss';

const AddComment = ({
    comments,
    setComments,
    currentUser,
    defaultContent = ``,
}) => {
    const defaultTextState = {
        value: defaultContent,
    };
    const [textValue, setTextValue] = useState(defaultTextState);
    const resetTextField = () => {
        setTextValue(defaultTextState);
    };

    const onChangeHandler = (event) => {
        setTextValue({ value: event.target.value });
    };
    const newComment = {
        id: comments.length + 1, //actually setting a future index as an id
        content: textValue.value,
        createdAt: 'time ago',
        replies: [],
        score: 0,
        user: currentUser,
    }; //new comment obj
    const setCommentHandler = (event) => {
        event.preventDefault();
        console.log(textValue.value.trim());
        if (textValue.value.trim() === ``) return;
        setComments([...comments, newComment]);
        resetTextField();
    };
    return (
        <div className='add-comment-container'>
            <div className='current-user-img'>
                <img
                    src={require(`../../assets/images/avatars/image-${currentUser.username}.png`)}
                    alt={currentUser.username}
                />
            </div>
            <form onSubmit={setCommentHandler}>
                <textarea
                    onChange={onChangeHandler}
                    value={textValue.value}
                    placeholder='Add a comment...'
                ></textarea>
                <Button btnType='submit' type='submit'>
                    SEND
                </Button>
            </form>
        </div>
    );
};

export default AddComment;
