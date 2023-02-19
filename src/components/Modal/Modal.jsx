import PropTypes from 'prop-types';
import { Backdrop, ModalWindow } from './Modal.styled';

export const Modal = ({ children, onClose }) => {
  const handleClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose(false);
    }
  };
  return (
    <Backdrop onClick={handleClose}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
