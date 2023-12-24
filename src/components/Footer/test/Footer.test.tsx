import { fireEvent, render } from '@testing-library/react';
import AppFooter from '../Footer';

describe('AppFooter', () => {
  it('should render without errors', () => {
    const { container } = render(<AppFooter />);
    expect(container).toBeInTheDocument();
  });

  it('should contain github links', () => {
    const { getAllByAltText } = render(<AppFooter />);
    const githubLinks = getAllByAltText('github-logo');
    expect(githubLinks.length).toBeGreaterThan(0);
  });

  it('should contain RS logo link', () => {
    const { getByAltText } = render(<AppFooter />);
    const rsLogoLink = getByAltText('rs-logo');
    expect(rsLogoLink).toBeInTheDocument();
  });
  it('should open github profile links in new tab', () => {
    const { getAllByTestId } = render(<AppFooter />);
    const githubLinks = getAllByTestId('link');
    githubLinks.forEach((link) => {
      fireEvent.click(link);
      expect(link).toHaveAttribute('target', 'blank');
    });
  });
});
