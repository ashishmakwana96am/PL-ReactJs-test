import React, { useEffect, useState } from 'react'
import './ModalAB.scss';
import { Link } from 'react-router-dom';
import { apidata } from '../api/modalApi';



const ModalA = () => {
    const [isModal, setIsModal] = useState(false);
    const [apiData, setApiData] = useState("");

    console.log(apiData, "apiData");
    console.log(apiData.contacts_ids, "apiData");

    const handleModal = () => {
        setIsModal(!isModal);
    };

    useEffect(() => {
        setApiData(apidata)
    }, [])



    return (
        <>
            <div className='maincontainer'>
                <div className='btnbox'>
                    <div className='mainbtnbox'>
                        <div className='btndiv'>
                            <button className='Allbtn' onClick={() => handleModal()}>All Contacts</button>
                            <Link to="/ModalB">
                                <button className='Usbtn'>US Contacts</button>
                            </Link>
                            <Link to="/">
                                <button className='close'>Close</button>
                            </Link>
                        </div>
                        {isModal && <div className='contacts_ids'>
                            <div className='inputdiv'>
                                <input type="search" name="search" id="searchid" className='searchid' />
                                <label htmlFor="searchid" className='searchidlabel'>Search Id</label>
                            </div>
                            <div className='idNub' >
                            {apiData.contacts_ids.map((item, index) => {
                                return (
                                        <span key={index}>{item}</span>
                                        )
                                    })}
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

export default ModalA