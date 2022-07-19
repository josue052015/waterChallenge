import { render, screen, fireEvent} from '@testing-library/react';
import { useState } from 'react';
import WaterJugFormComponent from './WaterJugFormComponent'


test('clicking the generate instructions button calls the event handler once', () => {

    const mockHandler = jest.fn()
   
    const component =  render(<WaterJugFormComponent setFormData = {mockHandler}/>); 
    const button = component.getByText('Generate steps')
    fireEvent.click(button)

    expect(mockHandler).toHaveBeenCalledTimes(1)
  });

  