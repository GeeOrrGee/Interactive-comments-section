import Button from '../buttons/button.component';
import { useState } from 'react';

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
    console.log(textValue);
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
    };
    const setCommentHandler = (event) => {
        event.preventDefault();
        console.log(textValue.value.trim());
        if (textValue.value.trim() === ``) return resetTextField();
        setComments([...comments, newComment]);
        resetTextField();
    };
    return (
        <div className='add-comment-container'>
            <div className='current-user-img'>
                <img />
            </div>
            <form onSubmit={setCommentHandler}>
                <textarea
                    onChange={onChangeHandler}
                    value={textValue.value}
                    placeholder='Add a comment...'
                ></textarea>
                <Button type='submit'>Add</Button>
            </form>
        </div>
    );
};

export default AddComment;
