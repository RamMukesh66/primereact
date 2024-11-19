import React, { useState } from 'react';

export default function Sidebar() {

    var activeSidebarChange = (e)=>{
        document.querySelectorAll('.sidebarList').forEach((item) => {
            item.classList.remove('sidebarActive');
        });
    
        e.currentTarget.classList.add('sidebarActive');
    }

    return(
        <div className='sidebarLayout'>
            <button className='primaryBtn' style={{width:'221px',display:'flex',alignItems:'center',gap:'8px',fontSize:'14px',padding:'12px',justifyContent:'center',cursor:'pointer'}}>
                <i className='pi pi-plus-circle'></i>
                Create Event/Request
            </button>

            <ul className='' style={{listStyle:'none',padding:'0',display:'flex',flexDirection:'column',gap:'8px'}}>

                <li onClick={activeSidebarChange} className='sidebarList sidebarActive'>
                    <div className='sidebarMenuList'>
                        <img src="./Inbox.svg" alt="" />
                        <span >Inbox</span>
                        <span className='sidebarNotifyCount'>1</span>
                    </div>
                    <div className='sidebarMenuCount'>
                        1024
                    </div>
                </li>

                <li onClick={activeSidebarChange} className='sidebarList'>
                    <div className='sidebarMenuList'>
                        <img src="./Clock.svg" alt="" />
                        <span >Action due (Inward)</span>
                        <span className='sidebarNotifyCount'>4</span>
                    </div>
                    <div className='sidebarMenuCount'>
                        
                    </div>
                </li>
                <li onClick={activeSidebarChange} className='sidebarList'>
                    <div className='sidebarMenuList'>
                        <img src="./Clock.svg" alt="" />
                        <span >Action due (Outward)</span>
                        <span className='sidebarNotifyCount'>8</span>
                    </div>
                    <div className='sidebarMenuCount'>
                        
                    </div>
                </li>
                <li onClick={activeSidebarChange} className='sidebarList'>
                    <div className='sidebarMenuList'>
                        <img src="./Sent.svg" alt="" />
                        <span >Sent</span>
                    </div>
                    <div className='sidebarMenuCount'>
                        528
                    </div>
                </li>
                <li onClick={activeSidebarChange} className='sidebarList'>
                    <div className='sidebarMenuList'>
                        <img src="./Draft.svg" alt="" />
                        <span >Draft</span>
                    </div>
                    <div className='sidebarMenuCount'>
                        60
                    </div>
                </li>
                <li onClick={activeSidebarChange} className='sidebarList'>
                    <div className='sidebarMenuList'>
                        <img src="./Archive.svg" alt="" />
                        <span >Archive</span>
                    </div>
                    <div className='sidebarMenuCount'>
                        32
                    </div>
                </li>

                <hr style={{width:'100%',background:'#D0D5DD',margin:'0'}} />

                <li onClick={activeSidebarChange} className='sidebarList'>
                    <div className='sidebarMenuList'>
                        <img src="./Profile.svg" alt="" />
                        <span >Profile</span>
                    </div>
                    <div className='sidebarMenuCount'>
                        28
                    </div>
                </li>
                <li onClick={activeSidebarChange} className='sidebarList'>
                    <div className='sidebarMenuList'>
                        <img src="./Database.svg" alt="" />
                        <span >Database</span>
                    </div>
                    <div className='sidebarMenuCount'>
                        88
                    </div>
                </li>
                <li onClick={activeSidebarChange} className='sidebarList'>
                    <div className='sidebarMenuList'>
                        <img src="./Report.svg" alt="" />
                        <span >Report</span>
                    </div>
                    <div className='sidebarMenuCount'>
                        56
                    </div>
                </li>
                <li onClick={activeSidebarChange} className='sidebarList'>
                    <div className='sidebarMenuList'>
                        <img src="./Documents.svg" alt="" />
                        <span >Documents</span>
                    </div>
                    <div className='sidebarMenuCount'>
                        129
                    </div>
                </li>

            </ul>
        </div>
    )
}