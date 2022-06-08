import Button from '../buttons/button.component';
import { useContext, useState } from 'react';
import './addComment.styles.scss';
import { CommentsContext } from '../../contexts/comments.context';

const AddComment = ({
    currentUser,
    setComments,
    comments,
    defaultContent = ``,
}) => {
    const { allCommentsIds, setAllCommentsIds, setReplyhostId } =
        useContext(CommentsContext);

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
        id: allCommentsIds.length + 1, //actually setting a future index as an id
        content: textValue.value,
        createdAt: 'time ago',
        replies: [],
        score: 0,
        user: currentUser,
    }; //new comment obj
    const setCommentHandler = (event) => {
        event.preventDefault();

        if (textValue.value.trim() === ``) return;
        setComments([...comments, newComment]);
        setAllCommentsIds([...allCommentsIds, newComment.id]);
        setReplyhostId(null);
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
