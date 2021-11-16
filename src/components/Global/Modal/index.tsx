import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { setModal } from '../redux/actions';
import { IModal } from '../../../interfaces';
import { IStore } from '../../../store';

export const GlobalModal: React.FC = () => {
  const modal = useSelector<IStore, IModal>(state => state.global.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal({ ...modal, isVisible: false }));
  };

  return (
    modal.isVisible ? <Modal show={modal.isVisible} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>{modal.heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modal.children}</Modal.Body>
    </Modal> : null
  );
};

export default Modal;
