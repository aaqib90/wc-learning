import { ModalWindow } from './modal-window';
if (!window.customElements.get('modal-window')) {
    window.customElements.define('modal-window', ModalWindow);
}
