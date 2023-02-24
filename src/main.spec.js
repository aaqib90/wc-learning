//import './main';
import { ModalWindow } from "./components/modal-window/modal-window";

describe('ui-elements integration tests', () => {
    describe('modal-window', () => {
        it(`should be defined`, () => {
            const modalWindowClass = window.customElements.get('modal-window');
            expect(modalWindowClass).toBe(ModalWindow);
        });
    });
});