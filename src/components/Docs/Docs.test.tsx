import { render, screen } from '@testing-library/react';
import Docs from './Docs';
import { LocalizationProvider } from '../../store/localization.context';

describe('Docs component', () => {
  // const schema = {
  // };

  // it('renders the component with root fields', () => {
  //   const { container } = render(<Docs visibility={true} schema={schema} />);
  //   const rootFields = container.querySelectorAll('.root-field');
  //   expect(rootFields.length).toBeGreaterThan(0);
  // });

  it('renders the component without root fields', () => {
    const { container } = render(
      <LocalizationProvider>
        <Docs visibility={true} schema={null} />
      </LocalizationProvider>,
    );
    const rootFields = container.querySelectorAll('.root-field');
    expect(rootFields.length).toBe(0);
  });

  // it('displays the name header correctly', () => {
  //   const { container } = render(<Docs visibility={true} schema={schema} />);
  //   const nameHeader = screen.getByRole('heading', { level: 3 });
  //   expect(nameHeader).toHaveTextContent('RootDocs');
  // });

  // it('displays the description correctly', () => {
  //   const { container } = render(<Docs visibility={true} schema={schema} />);
  //   const description = screen.getByText('Docs');
  //   expect(description).toBeInTheDocument();
  // });

  // it('displays the root component when stack length is 1', () => {
  //   const { container } = render(<Docs visibility={true} schema={schema} />);
  //   const rootComponent = container.querySelector('.root-component');
  //   expect(rootComponent).toBeInTheDocument();
  // });

  // it('displays the fields component when stack length is greater than 1', () => {
  //   const { container } = render(<Docs visibility={true} schema={schema} />);
  //   const fieldsComponent = container.querySelector('.fields-component');
  //   expect(fieldsComponent).toBeInTheDocument();
  // });

  // it('displays the input fields component when stack length is greater than 1 and kind is INPUT_OBJECT', () => {
  //   const { container } = render(<Docs visibility={true} schema={schema} />);
  //   const inputFieldsComponent = container.querySelector('.input-fields-component');
  //   expect(inputFieldsComponent).toBeInTheDocument();
  // });

  // it('hides the component when visibility is false', () => {
  //   const { container } = render(<Docs visibility={false} schema={schema} />);
  //   const docsComponent = container.querySelector('.docs-visible');
  //   expect(docsComponent).toBeNull();
  // });
});
