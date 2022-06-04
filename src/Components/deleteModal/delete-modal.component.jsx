import Button from '../buttons/button.component';
import './delete-modal.styles.scss';

const DeleteModal = ({ comments, setComments, id, setDeleteModal }) => {
    const deleteHandler = () => {
        const filteredComments = comments.filter(
            (commentObj) => commentObj.id !== id
        );
        setComments(filteredComments);
        setDeleteModal(false);
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
                    <Button onClick={cancelDeleteHandler}>NO, CANCEL</Button>
                    <Button onClick={deleteHandler}>YES, DELETE</Button>
                </div>
            </div>
        </>
    );
};

export default DeleteModal;
