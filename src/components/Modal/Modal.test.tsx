import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

test('modal should show the content and close after clicking on the cross button', () => {
  const handleClose = jest.fn();

  const { getByText } = render(
    <Modal close={handleClose}>
      <div>test</div>
    </Modal>
  );

  expect(getByText('test')).toBeTruthy();

  fireEvent.click(getByText('✖'));
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test('modal should be closed by clicking on a page outside the modal window', () => {
  const handleClose = jest.fn();

  const { getByTestId } = render(
    <Modal close={handleClose}>
      <div>test</div>
    </Modal>
  );

  fireEvent.click(getByTestId('modal'));
  expect(handleClose).toHaveBeenCalledTimes(1);
});
