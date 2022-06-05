import './button.styles.scss';

const Button = ({ btnType, ...otherProps }) => {
    const buttonType = {
        reply: 'replyBtn',
        delete: 'deleteBtn',
        submit: 'submitBtn',
        deleteModal: 'delete-modal',
        cancelModal: 'cancel-modal',
        vote: 'voteBtn',
    }[btnType];
    console.log(buttonType);
    return <button className={`${buttonType}`} {...otherProps}></button>;
};

export default Button;
