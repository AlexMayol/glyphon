import { render, screen } from '@testing-library/react';
import { Glyphon } from '../Glyphon'

describe('Glyphon tests', () => {
    it('renders headline', () => {
        render(<Glyphon text="Testing component" />);

        screen.debug();
    });
});
