const Modal = ({ closeModal }) => {
  return (
    <div className="z-50">
      <div className="">
        <h1>Thank You For Your Response Confirm your details</h1>
        <button onClick={() => closeModal(false)}>X</button>
        <div>FirstName</div>
        <div>Lastname</div>
        <div>FirstName</div>
        <div>FirstName</div>
        <div>FirstName</div>
      </div>
    </div>
  )
}

export default Modal
