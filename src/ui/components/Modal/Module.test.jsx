import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';


beforeAll(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });
  
afterAll(() => {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

describe('Modal component', () => {
  it('renders modal closed initially', () => {
    const { queryByText } = render(<Modal isOpen={false} onClose={() => {}} />);
    const modalContent = queryByText('What is heroes app?');
    
    expect(modalContent).toBeNull();
  });

  it('renders modal open when isOpen is true', () => {
    const { queryByText } = render(<Modal isOpen={true} onClose={() => {}} />);
    const modalContent = queryByText('What is heroes app?');
    
    expect(modalContent).not.toBeNull();
  });

  it('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(<Modal isOpen={true} onClose={onCloseMock} />);
    const closeButton = getByText('x');
    
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('closes modal when Escape key is pressed', () => {
    const onCloseMock = jest.fn();
    render(<Modal isOpen={true} onClose={onCloseMock} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onCloseMock).toHaveBeenCalled();
  });
});
