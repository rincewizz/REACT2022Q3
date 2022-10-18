import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Modal } from './Modal';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

test('modal should show the content', () => {
  const handleClose = jest.fn();
  render(
    <Modal close={handleClose}>
      <div>test</div>
    </Modal>
  );

  expect(screen.getByText('test')).toBeTruthy();
});

test('modal should close after clicking on the cross button', () => {
  const handleClose = jest.fn();
  render(
    <Modal close={handleClose}>
      <div>test</div>
    </Modal>
  );

  fireEvent.click(screen.getByText('✖'));

  expect(handleClose).toHaveBeenCalledTimes(1);
});

test('modal should be closed by clicking on a page outside the modal window', () => {
  const handleClose = jest.fn();
  render(
    <Modal close={handleClose}>
      <div>test</div>
    </Modal>
  );

  fireEvent.click(screen.getByTestId('modal'));

  expect(handleClose).toHaveBeenCalledTimes(1);
});
