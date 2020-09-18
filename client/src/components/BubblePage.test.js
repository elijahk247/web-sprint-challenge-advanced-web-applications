import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

// importing ColorsList as the BubblePage renders the received array in ColorsList 
import ColorList from './ColorList';

const colorsData = [
  {
    color: 'aliceblue',
    code: {
      hex: '#f0f8ff'
    },
    id: 1
  },
  {
    color: 'limegreen',
    code: {
      hex: '#99ddbc'
    },
    id: 2
  },
  {
    color: 'aqua',
    code: {
      hex: '#00ffff'
    },
    id: 3
  },
  {
    color: 'aquamarine',
    code: {
      hex: '#7fffd4'
    },
    id: 4
  },
  {
    color: 'lilac',
    code: {
      hex: '#9a99dd'
    },
    id: 5
  },
]

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  //const { rerender } = render(<BubblePage colors={[]} />)
  const { rerender } = render(<ColorList colors={[]} />);

  const getColors = screen.queryAllByTestId(/colors/i);
  expect(getColors).toHaveLength(0);

  //rerender(<BubblePage colors={[colorsData]} />)
  rerender(<ColorList colors={[colorsData]} />)
});
