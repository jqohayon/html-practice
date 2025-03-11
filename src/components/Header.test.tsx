import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  test('renders header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    // Add your test assertions here
  });
}); 