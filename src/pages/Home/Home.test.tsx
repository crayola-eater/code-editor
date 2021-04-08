import { render } from '@testing-library/react';
import Home from './Home';

test('should render a welcome message', () => {
  const { queryByText } = render(<Home />);
  expect(queryByText('Welcome to the Code Editor!')).toBeInTheDocument();
});
