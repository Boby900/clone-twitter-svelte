import { render } from '@testing-library/svelte';
import Button from '../routes/+layout.svelte'
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest'

describe('Button Component', () => {
  it('renders correctly with default label', () => {
    const { getByText } = render(Button);
    expect(getByText('Dashboard')).toBeInTheDocument(); // Use 'toBeInTheDocument' to assert the presence of the text
  });

  // it('renders correctly with a custom label', () => {
  //   const { getByText } = render(Button, { label: 'Submit' });
  //   expect(getByText('Submit')).toBeInTheDocument(); // Use 'toBeInTheDocument' to assert the presence of the text
  // });
});