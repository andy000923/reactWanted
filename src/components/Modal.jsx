import React from "react";
import ModalComponent from "react-modal";

const Modal = (props) => {
    const { children, modalStatus, closeModal, className } = props;

    return (
        <ModalComponent
            id="modal"
            isOpen={modalStatus}
            onRequestClose={closeModal}
            className={className}
            style={{
                overlay: {
                    position: "fixed",
                    top: 30,
                    left: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                },
                content: {
                    padding: 0,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    top: `calc(50% - 370px)`,
                    left: `calc(50% - 200px)`,
                    width: 400 + "px",
                    height: 740+"px",
                    border: "none",
                    borderRadius: 7,
                    backgroundColor: "white",
                },
            }}>
            {children}
        </ModalComponent>
    );
};

export default Modal;
