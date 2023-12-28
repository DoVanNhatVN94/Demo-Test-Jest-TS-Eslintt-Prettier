import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';
import React from 'react';

it('Render "Hello world"', () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello world/);

  expect(myElement).toBeInTheDocument(); //toBeInTheDocument kiểm tra xem phần tử có được hiển thị trên màn hình hay không. Nếu có, kiểm thử sẽ tiếp tục; ngược lại, nó sẽ fail.
  expect(myElement).toHaveTextContent('Hello'); //toHaveTextContent kiểm tra xem nội dung của phần tử có chứa chuỗi 'Hello' hay không.
  expect(myElement).toHaveTextContent(/^Hello world$/);
  // to use case-insentive match
  expect(myElement).toHaveTextContent(/world$/i);
  // expect(myElement).not.toHaveTextContent('world')
});
