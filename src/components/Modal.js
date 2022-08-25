
export const Modal = ({showModal, setShowModal}) => {
    return (
        <>
            {showModal ? <div className="modal-background">
                <div className="modal-box">
                    Modal
                    Content
                </div>
                <button className="close-modal-button">X</button>
            </div> : null}    
        </>
    )
}