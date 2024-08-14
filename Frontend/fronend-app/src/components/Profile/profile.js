import React from "react";
import './profile.css';
import mail from '../../assets/mail.png';
import edit from '../../assets/edit.png';
import profile from '../../assets/profilePic.png';
import phone from '../../assets/phone.png';
import Table from '../table'



export default function Profile() {
    return (
        <>
            <div className="profile-page">
                <div className="profile-card" >
                    <div className="profile">
                        <div className="profile-details">
                            <img style={{ maxWidth: '65px', maxHeight: '65px' }} src={profile} alt="profile" />
                            <div className="profile-name">
                                <p className="boldFont">Rahu Kumar</p>
                                <p className="font">Software Developer</p>
                            </div>

                        </div>
                        <img className="icon" src={edit} alt="mail" />

                    </div>
                    <div className="mail-details">
                        <img className="icon" src={mail} alt="mail" />
                        {/* <p>mail log</p> */}
                        <p className="font">rahulkumar.a409@gmail.com</p>
                    </div>
                    <div className="phone-details">
                        <img className="icon" src={phone} alt='phone' />
                        <p className="font">8804880517</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '14px', fontWeight: 'bold' }}>Skills</h2>
                        <div className="skills-details">
                            <p className="p1-card-details">12 postions</p>
                            <p className="p1-card-details">Full Time</p>
                            <p className="p1-card-details">14LPA</p>
                        </div>
                    </div>
                    <div className="resume">
                        <h2 style={{ fontSize: '14px', fontWeight: 'bold' }}>Resume</h2>
                        <p className="font">resume.pdf</p>
                    </div>

                </div>
                <div style={{ marginTop: '40px' }}><h1 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold', marginLeft: '10px' }}>Applied Job</h1><Table /></div>
            </div>
        </>
    );
}
