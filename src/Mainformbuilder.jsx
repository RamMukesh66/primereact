import React, { useState, useEffect } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
import { RadioButton } from "primereact/radiobutton";


export default function MainPage() {

    useEffect(() => {
        const splitterHandles = document.querySelectorAll('.p-splitter-gutter');

        splitterHandles.forEach((handle) => {
            handle.innerHTML = ''; 

            const wrapperDiv = document.createElement('div');

            wrapperDiv.innerHTML = `
                <div style="display: flex; gap: 6px; margin: 3px;">
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                </div>
                <div style="display: flex; gap: 6px; margin: 3px;">
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                </div>
            `;
            handle.appendChild(wrapperDiv);
        });
    }, []);

    return(
        <>
        <div className='d-flex align-center justify-between' style={{height:'60px',background:'#FFFFFF',border:'1px solid #D0D5DD',padding:'12px'}}>
            <div className='d-flex align-center'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#1D2939" strokeWidth="2"/>
                </svg>
                <p style={{margin:0}}>Register of a Crime - Create FIR</p>
            </div>
            <div className='d-flex align-center' style={{gap:'12px'}}>
                <button style={{padding:'8px',background:'#F9FAFB',border:'1px solid #D0D5DD',borderRadius:'6px',fontSize:'14px',fontWeight:'500'}}>Chose old drafts</button>
                <hr style={{width:'16px',border:'1px solid #D0D5DD',rotate:'90deg'}} />
                <button style={{padding:'8px',background:'#F9FAFB',border:'1px solid #D0D5DD',borderRadius:'6px',fontSize:'14px',fontWeight:'500'}}>Save as drafts</button>
                <button style={{padding:'8px',background:'#32D583',border:'1px solid #D0D5DD',borderRadius:'6px',fontSize:'14px',fontWeight:'500'}}>Register FIR</button>
            </div>
        </div>
        <div style={{position:'relative',height: '100vh'}}>
            <div style={{position:'absolute',bottom:'0',width:'100%',height: '100%'}}>
                <Splitter style={{ height: '100%' }} layout="vertical">


                    <SplitterPanel style={{position:'relative'}}>
                        <div className='d-flex justify-between align-center' style={{padding:'20px',width:'100%',position:'absolute',top:'0'}}>
                            <div className='d-flex align-center' style={{gap:'24px'}}>
                                <div className='d-flex align-center' style={{gap:'12px'}}>
                                    <span className='d-flex align-center justify-center' style={{width:'28px',height:'28px',background:'#1D2939',fontSize:'16px',fontWeight:'500',color:'#FFFFFF',borderRadius:'5px'}}>
                                        1
                                    </span>
                                    <p style={{margin:'0',fontSize: '18px',fontWeight: '500',color:'#1D2939'}}>Basic details</p>
                                </div>
                                <div className='d-flex align-center' style={{background:'#F9FAFB',border:'0.8px solid #D0D5DD',padding:'8px',borderRadius:'6px'}}>
                                    <div className='d-flex align-center' style={{gap:'4px'}}>
                                        <span className='d-flex align-center justify-center' style={{width:'12px',height:'12px',background:'#1570EF',fontSize:'8px',fontWeight:'500',color:'#FFFFFF',borderRadius:'50%'}}>
                                            i
                                        </span>
                                        <p style={{margin:'0',fontSize: '14px',fontWeight: '400',color:'#1D2939'}}>For more information</p>
                                    </div>
                                    <hr style={{width:'16px',border:'1px solid #D0D5DD',rotate:'90deg'}} />
                                    <div className='d-flex align-center' style={{gap:'4px'}}>
                                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9444 5.72222L10.8336 6.83333L9.72219 5.72222M10.9695 6.55556C10.9896 6.37315 11 6.18778 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C7.5707 11 8.97225 10.2757 9.88889 9.14296M6 3.22222V6L7.66667 7.11111" stroke="#1570EF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p style={{margin:'0',fontSize: '14px',fontWeight: '400',color:'#1D2939'}}>To check previous logs</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-center' style={{gap:'8px'}}>
                                <Button label="Back" severity="secondary" outlined icon="pi pi-arrow-left" style={{fontSize:'14px',padding:'8px'}} />
                                <Button iconPos="right" label="Next" icon="pi pi-arrow-right" style={{fontSize:'14px',padding:'8px'}} />
                            </div>
                        </div>
                    </SplitterPanel>


                    <SplitterPanel style={{borderTop:'6px solid #1570EF',borderRadius:'8px'}}>
                        <div style={{padding:'10px',width:'100%'}}>
                            <div className='d-flex align-center justify-between'>
                                <button className='d-flex align-center' style={{padding:'8px',background:'#F9FAFB',border:'1px solid #D0D5DD',borderRadius:'6px',fontSize:'14px',fontWeight:'500',gap:'8px',color:'#1D2939'}}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.61342 8.47549C1.52262 8.33173 1.47723 8.25985 1.45182 8.14898C1.43273 8.06571 1.43273 7.93437 1.45182 7.8511C1.47723 7.74023 1.52262 7.66835 1.61341 7.52459C2.36369 6.3366 4.59693 3.33337 8.00027 3.33337C11.4036 3.33337 13.6369 6.3366 14.3871 7.52459C14.4779 7.66835 14.5233 7.74023 14.5487 7.8511C14.5678 7.93437 14.5678 8.06571 14.5487 8.14898C14.5233 8.25985 14.4779 8.33173 14.3871 8.47549C13.6369 9.66348 11.4036 12.6667 8.00027 12.6667C4.59693 12.6667 2.36369 9.66348 1.61342 8.47549Z" stroke="#1D2939" strokeWidth="1.2"/>
                                        <path d="M8.00027 10C9.10484 10 10.0003 9.10461 10.0003 8.00004C10.0003 6.89547 9.10484 6.00004 8.00027 6.00004C6.8957 6.00004 6.00027 6.89547 6.00027 8.00004C6.00027 9.10461 6.8957 10 8.00027 10Z" stroke="#1D2939" strokeWidth="1.2"/>
                                    </svg>
                                    Preview template
                                </button>
                                <button className='d-flex align-center' style={{padding:'8px',background:'#12B76A',border:'1px solid #D0D5DD',borderRadius:'6px',fontSize:'14px',fontWeight:'500',gap:'8px',color:'#FFFFFF'}}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66667 2V4.26667C4.66667 4.64004 4.66667 4.82672 4.73933 4.96933C4.80324 5.09477 4.90523 5.19676 5.03067 5.26067C5.17328 5.33333 5.35997 5.33333 5.73333 5.33333H10.2667C10.64 5.33333 10.8267 5.33333 10.9693 5.26067C11.0948 5.19676 11.1968 5.09477 11.2607 4.96933C11.3333 4.82672 11.3333 4.64004 11.3333 4.26667V2.66667M11.3333 14V9.73333C11.3333 9.35997 11.3333 9.17328 11.2607 9.03067C11.1968 8.90523 11.0948 8.80324 10.9693 8.73933C10.8267 8.66667 10.64 8.66667 10.2667 8.66667H5.73333C5.35997 8.66667 5.17328 8.66667 5.03067 8.73933C4.90523 8.80324 4.80324 8.90523 4.73933 9.03067C4.66667 9.17328 4.66667 9.35997 4.66667 9.73333V14M14 6.21699V10.8C14 11.9201 14 12.4802 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H5.2C4.0799 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4802 2 11.9201 2 10.8V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H9.78301C10.1091 2 10.2722 2 10.4256 2.03684C10.5617 2.0695 10.6918 2.12337 10.811 2.19648C10.9456 2.27894 11.0609 2.39424 11.2915 2.62484L13.3752 4.7085C13.6058 4.9391 13.7211 5.0544 13.8035 5.18895C13.8766 5.30825 13.9305 5.43831 13.9632 5.57436C14 5.72781 14 5.89087 14 6.21699Z" stroke="white" strokeWidth="1.2"/>
                                    </svg>
                                    Save template
                                </button>
                            </div>
                        </div>
                    </SplitterPanel>


                </Splitter>
            </div>
        </div>
        </>
    )
}
