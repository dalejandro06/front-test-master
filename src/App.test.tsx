import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import CardItem from './components/CardItem';

test('renders header', () => {
  render(<App />);
  const headerLogo = screen.getByAltText(/Logo/i);
  const inputElement = screen.getByPlaceholderText(/You're looking for something?/i)

  expect(headerLogo).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});


test("Render <CardItem />", () => {
    const product = {
      type: 'type',
      id: 1,
      title: "Title",
      price: 1,
      author: "test Author",
      created_at: "created at",
      main_attachment: { big: "", small: ''},
      likes_count: 1,
      liked: false,
      links: [],
    }
  const component = render(<CardItem product={product} />)

  component.getByText(product.title)
  component.getByText(product.author)
  const button = component.getAllByRole('button')[0]
  expect(button).toHaveTextContent("1")
})


// TODO: arreglar
test("Click the like button calls event handler once", () => {
  const product = {
    type: 'type',
    id: 10,
    title: "Title",
    price: 20,
    author: "test Author",
    created_at: "created at",
    main_attachment: { big: "", small: ''},
    likes_count: 1,
    liked: false,
    links: [],
  }
  const component = render(<CardItem product={product} />)
  const button = component.getAllByRole('button')[0];

  component.getByText(/1/i)

  fireEvent.click(button)

  component.getAllByAltText(/1/i)
})