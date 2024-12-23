import React, { useState } from 'react';

export default function Sidebar() {

    var activeSidebarChange = (e)=>{
        document.querySelectorAll('.lokayuktaSidebarMenuList').forEach((item) => {
            item.classList.remove('activeLokayuktaSidebar');
        });
    
        e.currentTarget.classList.add('activeLokayuktaSidebar');
    }
    
    var toggleSidebar = () => {        
        var sidebar = document.querySelector('#mainSidebar');
        if(sidebar) {
            sidebar.classList.toggle('hidden');
        }
    };

    document.addEventListener('click', (event) => {
        var toggleBtn = document.querySelector('#toggleSidebarBtn');
        var sidebar = document.querySelector('#mainSidebar');
    
        if (!toggleBtn || !sidebar) return;
            
        var isToggleVisible = toggleBtn.offsetParent !== null;
            
        if (isToggleVisible) {
            var isClickInsideSidebar = sidebar.contains(event.target);
            var isClickOnToggleBtn = toggleBtn.contains(event.target);
            
            if (!isClickInsideSidebar && !isClickOnToggleBtn) {
                sidebar.classList.add('hidden');
            }
        }
    });
    

    return(
        <>
        <div id='toggleSidebarBtn' className='block md:hidden'>
            <svg onClick={toggleSidebar} style={{margin:'10px 20px'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="#101828" strokeWidth="2"/>
            </svg>
        </div>
        <div id="mainSidebar" className='lokayuktaSidebarLayout shadow-1 hidden md:block'>
            <div className='flex align-items-center' style={{gap:'10px',height:'70px',borderBottom:'1px solid #D0D5DD',paddingLeft:'18px'}}>
                <img src="./lokayuktaLogo.svg" alt="" />
                <p className='logoName'>
                    Karnataka <br />
                    Lokuyukta Police
                </p>
            </div>
            <div>
                <ul className='flex flex-column p-0 list-none' style={{gap:'4px'}}>

                    <li className='lokayuktaSidebarMenuList activeLokayuktaSidebar' onClick={activeSidebarChange}>
                        <svg width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3332 16.5V14.8333C18.3332 13.2801 17.2709 11.9751 15.8332 11.605M12.9165 1.7423C14.1381 2.23679 14.9998 3.43443 14.9998 4.83333C14.9998 6.23224 14.1381 7.42988 12.9165 7.92437M14.1665 16.5C14.1665 14.9469 14.1665 14.1703 13.9128 13.5577C13.5745 12.741 12.9255 12.092 12.1088 11.7537C11.4962 11.5 10.7196 11.5 9.1665 11.5H6.6665C5.11337 11.5 4.3368 11.5 3.72423 11.7537C2.90747 12.092 2.25855 12.741 1.92024 13.5577C1.6665 14.1703 1.6665 14.9469 1.6665 16.5M11.2498 4.83333C11.2498 6.67428 9.75745 8.16667 7.9165 8.16667C6.07555 8.16667 4.58317 6.67428 4.58317 4.83333C4.58317 2.99238 6.07555 1.5 7.9165 1.5C9.75745 1.5 11.2498 2.99238 11.2498 4.83333Z"/>
                        </svg>
                        <span>User management</span>
                    </li>

                    <li className='lokayuktaSidebarMenuList' onClick={activeSidebarChange}>
                        <svg width="20" height="20" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4C19 5.65685 14.9706 7 10 7C5.02944 7 1 5.65685 1 4M19 4C19 2.34315 14.9706 1 10 1C5.02944 1 1 2.34315 1 4M19 4V18C19 19.66 15 21 10 21C5 21 1 19.66 1 18V4M19 11C19 12.66 15 14 10 14C5 14 1 12.66 1 11" />
                        </svg>
                        <span>Masters</span>
                    </li>

                    <li className='lokayuktaSidebarMenuList' onClick={activeSidebarChange}>
                        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 9L16.5 9M9 1.5L9 16.5M5.5 1.5H12.5C13.9001 1.5 14.6002 1.5 15.135 1.77248C15.6054 2.01217 15.9878 2.39462 16.2275 2.86502C16.5 3.3998 16.5 4.09987 16.5 5.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V5.5C1.5 4.09987 1.5 3.3998 1.77248 2.86502C2.01217 2.39462 2.39462 2.01217 2.86502 1.77248C3.3998 1.5 4.09987 1.5 5.5 1.5Z" />
                        </svg>
                        <span>Template</span>
                    </li>
                    
                </ul>

                <hr className='w-full' style={{border:'1px solid #EAECF0'}} />

                <ul className='flex flex-column p-0 list-none' style={{gap:'4px'}}>

                    <li className='lokayuktaSidebarMenuList' onClick={activeSidebarChange}>
                        <svg className='fillSvg' width="20" height="20" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4638 16.9146L15.3429 7.93075C15.1237 7.3397 14.6331 6.97433 14.0694 6.97433C13.5058 6.97433 13.0256 7.3397 12.7856 7.95224L9.67502 16.9146C9.52889 17.3337 9.73765 17.7958 10.1447 17.9463C10.5518 18.0967 11.0007 17.8818 11.1468 17.4627L11.7939 15.6036H16.3345L16.9816 17.4627C17.0965 17.7958 17.3992 18 17.7227 18C17.8062 18 17.9002 17.9893 17.9837 17.957C18.3908 17.8066 18.5995 17.3445 18.4534 16.9254L18.4638 16.9146ZM12.368 13.9809L14.0799 9.04836L15.7917 13.9809H12.368ZM9.70634 4.53493C7.34733 8.37134 5.21799 10.6925 2.62936 12.24C2.5041 12.3152 2.36841 12.3475 2.24315 12.3475C1.97176 12.3475 1.71081 12.2078 1.56468 11.9499C1.34548 11.563 1.47074 11.0687 1.84651 10.8537C4.03848 9.54269 5.83383 7.66209 7.84837 4.54567H1.28285C0.854893 4.54567 0.5 4.1803 0.5 3.7397C0.5 3.2991 0.854893 2.93373 1.28285 2.93373H5.19711V0.80597C5.19711 0.365373 5.552 0 5.97996 0C6.40791 0 6.76281 0.365373 6.76281 0.80597V2.93373H10.6771C11.105 2.93373 11.4599 3.2991 11.4599 3.7397C11.4599 4.1803 11.105 4.54567 10.6771 4.54567H9.6959L9.70634 4.53493ZM9.74809 12.3475C9.6124 12.3475 9.4767 12.3152 9.35145 12.24C8.67297 11.8316 8.01538 11.3803 7.39952 10.9075C7.05507 10.6388 6.98201 10.1337 7.24296 9.7791C7.50391 9.42448 7.9945 9.34925 8.33896 9.61791C8.90261 10.0585 9.51845 10.4669 10.1447 10.843C10.5205 11.0687 10.6458 11.563 10.4266 11.9499C10.2804 12.2078 10.0195 12.3475 9.74809 12.3475Z"/>
                        </svg>
                        <span>Change language</span>
                    </li>

                    <li className='lokayuktaSidebarMenuList' onClick={activeSidebarChange}>
                        <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8332 9.16663V6.83329C18.8332 5.89987 18.8332 5.43316 18.6515 5.07664C18.4917 4.76304 18.2368 4.50807 17.9232 4.34828C17.5666 4.16663 17.0999 4.16663 16.1665 4.16663H4.83317C3.89975 4.16663 3.43304 4.16663 3.07652 4.34828C2.76292 4.50807 2.50795 4.76304 2.34816 5.07664C2.1665 5.43316 2.1665 5.89987 2.1665 6.83329V9.83329C2.1665 10.7667 2.1665 11.2334 2.34816 11.5899C2.50795 11.9035 2.76292 12.1585 3.07652 12.3183C3.43304 12.5 3.89975 12.5 4.83317 12.5H9.6665M10.4998 8.33329H10.504M14.6665 8.33329H14.6707M6.33317 8.33329H6.33734M16.5415 14.1666V12.7083C16.5415 11.9029 15.8886 11.25 15.0832 11.25C14.2778 11.25 13.6248 11.9029 13.6248 12.7083V14.1666M10.7082 8.33329C10.7082 8.44835 10.6149 8.54163 10.4998 8.54163C10.3848 8.54163 10.2915 8.44835 10.2915 8.33329C10.2915 8.21823 10.3848 8.12496 10.4998 8.12496C10.6149 8.12496 10.7082 8.21823 10.7082 8.33329ZM14.8748 8.33329C14.8748 8.44835 14.7816 8.54163 14.6665 8.54163C14.5514 8.54163 14.4582 8.44835 14.4582 8.33329C14.4582 8.21823 14.5514 8.12496 14.6665 8.12496C14.7816 8.12496 14.8748 8.21823 14.8748 8.33329ZM6.5415 8.33329C6.5415 8.44835 6.44823 8.54163 6.33317 8.54163C6.21811 8.54163 6.12484 8.44835 6.12484 8.33329C6.12484 8.21823 6.21811 8.12496 6.33317 8.12496C6.44823 8.12496 6.5415 8.21823 6.5415 8.33329ZM13.4998 17.5H16.6665C17.1332 17.5 17.3666 17.5 17.5448 17.4091C17.7016 17.3292 17.8291 17.2018 17.909 17.045C17.9998 16.8667 17.9998 16.6333 17.9998 16.1666V15.5C17.9998 15.0332 17.9998 14.7999 17.909 14.6216C17.8291 14.4648 17.7016 14.3373 17.5448 14.2575C17.3666 14.1666 17.1332 14.1666 16.6665 14.1666H13.4998C13.0331 14.1666 12.7998 14.1666 12.6215 14.2575C12.4647 14.3373 12.3372 14.4648 12.2573 14.6216C12.1665 14.7999 12.1665 15.0332 12.1665 15.5V16.1666C12.1665 16.6333 12.1665 16.8667 12.2573 17.045C12.3372 17.2018 12.4647 17.3292 12.6215 17.4091C12.7998 17.5 13.0331 17.5 13.4998 17.5Z"/>
                        </svg>
                        <span>Change password</span>
                    </li>

                    <li className='lokayuktaSidebarMenuList' onClick={activeSidebarChange}>
                        <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8333 14.1667L18 10M18 10L13.8333 5.83333M18 10H8M10.5 14.1667C10.5 14.9416 10.5 15.3291 10.4148 15.647C10.1836 16.5098 9.50978 17.1836 8.64705 17.4148C8.32913 17.5 7.94164 17.5 7.16667 17.5H6.75C5.58515 17.5 5.00272 17.5 4.54329 17.3097C3.93072 17.056 3.44404 16.5693 3.1903 15.9567C3 15.4973 3 14.9149 3 13.75V6.25C3 5.08515 3 4.50272 3.1903 4.04329C3.44404 3.43072 3.93072 2.94404 4.54329 2.6903C5.00272 2.5 5.58515 2.5 6.75 2.5H7.16667C7.94164 2.5 8.32913 2.5 8.64705 2.58519C9.50978 2.81635 10.1836 3.49022 10.4148 4.35295C10.5 4.67087 10.5 5.05836 10.5 5.83333"/>
                        </svg>
                        <span>Logout</span>
                    </li>

                </ul>

                <hr className='w-full' style={{border:'1px solid #EAECF0'}} />

                <div className='flex align-items-center' style={{padding:'6px 16px',gap:'8px'}}>
                    <img src="./user.svg" className='lokaUserLogo' alt="" />
                    <div className='flex flex-column' style={{gap:'5px'}}>
                        <label className='lokaUserName'>Manjunath Dixit SV</label>
                        <label className='lokaUserDesignation'>ASP</label>
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}
