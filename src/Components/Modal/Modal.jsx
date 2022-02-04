import React from 'react'
import './Modal.scss'


const Modal = React.forwardRef(({ text }, ref) => {
    return (
        <div className='modal' ref={ref} onClick={(evt) => {
            if (evt.target.matches('.modal')) {
                ref.current.classList.remove('modal--open')
            }
        }}>
            <div className="modal__inner">
                <h3>{text}</h3> <button onClick={() => ref.current.classList.remove('modal--open')}>x</button>
            </div>
        </div >
    )
})

export default Modal