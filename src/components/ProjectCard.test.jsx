import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard.jsx';

const mockProject = {
  title: 'Test Project',
  image: '/test.jpg',
  tech: ['React', 'Python'],
  desc: 'A test project description.',
  github: 'https://github.com/test',
  demo: 'https://demo.com',
  index: 0,
};

describe('ProjectCard', () => {
  it('renders project title and description', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description.')).toBeInTheDocument();
  });

  it('renders tech stack pills', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  it('renders GitHub and Demo buttons', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByLabelText('View on GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('View Demo')).toBeInTheDocument();
  });
}); 