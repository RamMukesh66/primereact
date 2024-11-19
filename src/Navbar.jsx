import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { InputIcon } from 'primereact/inputicon';
import { IconField } from 'primereact/iconfield';

export default function Navbar() {
    var [value,setValue] = useState('')
    return(
        <div className='navbarHeader'>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                {/* navbar front logo */}
                <div style={{height:'100%',display:'inline-flex',alignItems:'center'}}>
                    <div style={{height:'100%',display:'inline-flex',alignItems:'center',gap:'3px',paddingRight:'10px',borderRight: '1.2px solid rgba(208, 213, 221, 1)'}}>
                        <img src="./globe.svg" width={'26.4px'} height={'26.4px'} />
                        <p className='logoText'>SIIMS</p>
                    </div>
                    <div style={{paddingLeft:'10px'}}>
                        <img src="./logo.svg" alt="" />
                    </div>
                </div>

                {/* navbar middle search */}
                <div style={{position:'relative'}}>
                    <IconField iconPosition="left"  style={{width:'25%'}}>
                        <InputIcon className="pi pi-search" />
                        <InputText className='navbarSearchInput' value={value}  style={{width:'100%'}} type="search" onInput={(e) => setValue(e.target.value)} placeholder="Search anything" />
                    </IconField>
                    {/* <InputText placeholder='Search anything' value={value} onChange={(e) => setValue(e.target.value)} className='navbarSearchInput' />
                    <i className='pi pi-search' style={{color:'rgba(102, 112, 133, 1)',position:'absolute',left:'16px',top:'28%'}}></i> */}
                    <img src="./searchEndIcon.svg" alt="" style={{position:'absolute',right:'16px',top:'35%'}} />
                </div>

                {/* navbar end user details */}
                <div style={{height:'100%',display:'inline-flex',alignItems:'center'}}>
                    <i className='pi pi-question-circle' style={{width:'20px',height:'20px',color:'rgba(29, 41, 57, 1)',marginRight:'10px',fontSize:'20px'}}></i>
                    <div style={{display:'flex',alignItems:'center',paddingLeft:'10px',paddingRight:'10px',borderRight:'1.2px solid rgba(208, 213, 221, 1)',borderLeft:'1.2px solid rgba(208, 213, 221, 1)'}}>
                        <img src="./user.svg" className='userLogo' />
                        <div style={{display:'flex',flexDirection:'column',paddingLeft:'8px',paddingRight:'8px',gap:'5px'}}>
                            <label className='userName'>Ramesh Rao</label>
                            <label className='userDesignation'>ASP</label>
                        </div>
                    </div>
                    <i className='pi pi-sign-out' style={{marginLeft:'16px',color:'rgba(152, 162, 179, 1)',width:'18px',height:'18px',fontSize:'18px'}}></i>
                </div>

            </div>
        </div>
    )
}