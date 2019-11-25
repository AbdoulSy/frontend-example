import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Timer from ".";

describe("Given <Timer />", () => {
    describe("When Rendered", () => {
        let timerElement;

        beforeEach(() => {
            const { getByTestId } = render(<Timer />)
            timerElement = getByTestId('timer-title')
        });

        it("should be in the document as the rendered version", () => {
            expect(timerElement).toBeInTheDocument();
        });

        it("should match the inline snapshot", () => {
            expect(timerElement.asFragment()).toMatchInlineSnapshot(`<div data-testid="timer-title">
                <span data-testid="timer-time">0</span> elapsed
            </div>`);
        });


    });
});