import React from "react";

const Modal = ({text, toLanding}) => {
    return (
        <div class="modal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        {text}
                    </div>
                    <div class="modal-footer">
                        <button type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={toLanding}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal
