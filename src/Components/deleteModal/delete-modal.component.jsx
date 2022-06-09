import { useContext } from 'react';
import { CommentsContext } from '../../contexts/comments.context';
import Button from '../buttons/button.component';
import './delete-modal.styles.scss';

const DeleteModal = ({ comments, id, setDeleteModal }) => {
    const { setAllCommentsIds, allCommentsIds } = useContext(CommentsContext);
    const deleteHandler = () => {
        // const filteredComments = comments.filter(
        //     (commentObj) => commentObj.id !== id
        // );
        // setComments(filteredComments);
        setAllCommentsIds(allCommentsIds.filter((idObj) => idObj !== id));
        setDeleteModal(false);
        console.log(allCommentsIds);
        return comments.pop((commentObj) => commentObj === id); // liiterally last bug <<<<<--------
    };

    const cancelDeleteHandler = () => {
        setDeleteModal(false);
    };

    return (
        <>
            <div onClick={cancelDeleteHandler} className='backdrop'></div>
            <div className='delete-modal-container'>
                <h2>Delete comment</h2>
                <p>
                    Are you sure you want to delete this comment? This will
                    remove the comment and can't be undone.
                </p>
                <div className='delete-modal-buttons'>
                    <Button onClick={cancelDeleteHandler} btnType='cancelModal'>
                        NO, CANCEL
                    </Button>
                    <Button btnType='deleteModal' onClick={deleteHandler}>
                        YES, DELETE
                    </Button>
                </div>
            </div>
        </>
    );
};

export default DeleteModal;
