import { render, screen } from '@testing-library/react';
import { Glyphon } from '../Glyphon'

const content = 'Testing component';
describe('Glyphon tests', () => {
    it('renders base content', () => {
        render(<Glyphon text={content} />);
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it('renders with custom class', () => {
        const customClass = 'custom-class';
        render(<Glyphon text={content} className={customClass} />);
        expect(screen.getByText(content)).toHaveClass(customClass);
    });
});
