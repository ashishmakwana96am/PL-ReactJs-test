import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ModalB = () => {
    const [isModal, setIsModal] = useState(false);

    const handleModal = () => {
        setIsModal(!isModal);
    };
    return (
        <>
            <div className='container'>
                <div className='btnbox'>
                    <div className='mainbtnbox'>
                        <div className='btndiv'>
                            <Link to="/ModalA">
                                <button className='AllbtnB'>All Contacts</button>
                            </Link>
                                <button className='UsbtnB' onClick={() => setIsModal(true)}>US Contacts</button>
                            <Link to="/">
                                <button className='closeB'>Close</button>
                            </Link>
                        </div>
                        {isModal && <div className='contacts_ids'>
                            <div className='inputdiv'>
                                <input type="search" name="search" id="searchid" className='searchid' />
                                <label htmlFor="searchid" className='searchidlabel'>Search Id</label>
                            </div>
                            <div className='idNub'>
                                <span>1311497</span>
                                <span>1311497</span>
                                <span>1311497</span>
                                <span>1311497</span>
                                <span>1311497</span>
                                <span>1311497</span>
                                <span>1311497</span>
                                <span>1311497</span>
                                <span>1311497</span>
                                <span>1311497</span>
                            </div>
                            <div className='closebtn'>
                                <button className='' onClick={() => setIsModal(false)}>Close</button>
                            </div>
                        </div>
                        }
                    </div>
                    <div className='footer'>
                        <div className='checkbox'>
                            <input type="checkbox" name="evenid" id="evenid" />
                            <label htmlFor="evenid">Even Id</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalB