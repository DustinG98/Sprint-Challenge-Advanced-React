import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import NavBar from './components/NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('toggle dark mode is on the page', () => {
  const { getByTestId } = render(<App/>)
  const toggle = getByTestId("testToggle")

  expect(toggle).toBeInTheDocument()
})

test('toggle dark mode fires', () => {
  const { getByTestId } = render(<App/>)
  const toggle = getByTestId("testToggle")

  fireEvent.click(toggle);
})

test('navbar contains players text', () => {
  const { getByText } = render(<NavBar/>)
  const header = getByText(/players/i)

  expect(header).toBeInTheDocument()
})

test('search chart is on the page', () => {
  const { getByTestId } = render(<App/>)
  const chart = getByTestId("searchChart")

  expect(chart).toBeInTheDocument()
})

// test('renders 100 players', async () => {
//   const { getAllByTestId } = render(<App/>)
//   const players = await waitForDomChange(() => getAllByTestId("player")) 

//   expect(players.length > 99)
// })