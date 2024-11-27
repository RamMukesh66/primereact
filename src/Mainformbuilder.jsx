import React, { useState, useEffect } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
import { RadioButton } from "primereact/radiobutton";
import { TabView, TabPanel } from 'primereact/tabview';

export default function MainPage() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [checked1, setChecked1] = useState('');
    const [checked2, setChecked2] = useState('');
    const [checked3, setChecked3] = useState('');
    const [checked4, setChecked4] = useState('');
    const [checked5, setChecked5] = useState('');

    useEffect(() => {
        const splitterHandles = document.querySelectorAll('.p-splitter-gutter');

        splitterHandles.forEach((handle) => {
            handle.innerHTML = ''; 

            const wrapperDiv = document.createElement('div');

            wrapperDiv.innerHTML = `
                <div class="flex gap-1 m-1">
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                </div>
                <div class="flex gap-1 m-1">
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                    <p style="margin:0; background:#D0D5DD; min-width:0.3rem; height:0.3rem; border-radius:50%;"></p>
                </div>
            `;
            handle.appendChild(wrapperDiv);
        });
    }, []);

    const countries = [
        { name: "Short Input", code: "US" },
        { name: "Long input", code: "DE" },
        { name: "Drop down (Single selection)", code: "IN" },
        { name: "Drop down (Multiple selection)", code: "SE" },
        { name: "Dates input", code: "DI" },
        { name: "Time input", code: "TI" },
        { name: "Date & time input", code: "DTI" },
        { name: "Attachments", code: "AM" }
    ];

    const processCountryName = (name) => {
        const [englishText, kannadaText] = name.split("•").map(text => text.trim());
        return (
            <>
                {englishText} <span className="anekFont">{kannadaText ? '• '+kannadaText : ''}</span>
            </>
        );
    };

    const countryOptionTemplate = (option) => {
        if (!option) return null;

        return (
            <div className="singleSelectOptions">
                <RadioButton
                    inputId={option.code}
                    name="country"
                    onChange={(e) => setSelectedCountry(e.value)}
                    value={option}
                    className="mr-2"
                />
                <label htmlFor={option.code} className="singleSelectLabel">
                    {processCountryName(option.name)}
                </label>
            </div>
        );
    };

    return(
        <>
        <div className='grid align-center p-2' style={{background:'#FFFFFF',border:'1px solid #D0D5DD',padding:'12px'}}>
            <div className='col-12 md:col-6 flex align-items-center'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#1D2939" strokeWidth="2"/>
                </svg>
                <p style={{margin:0}}>Register of a Crime - Create FIR</p>
            </div>
            <div className='col-12 md:col-6'>
                <div className='flex align-items-center justify-content-end' style={{gap:'12px'}}>              
                    <button style={{padding:'8px',background:'#F9FAFB',border:'1px solid #D0D5DD',borderRadius:'6px',fontSize:'14px',fontWeight:'500'}}>Chose old drafts</button>
                    <hr className='m-0' style={{width:'16px',border:'1px solid #D0D5DD',rotate:'90deg'}} />
                    <button style={{padding:'8px',background:'#F9FAFB',border:'1px solid #D0D5DD',borderRadius:'6px',fontSize:'14px',fontWeight:'500'}}>Save as drafts</button>
                    <button style={{padding:'8px',background:'#32D583',border:'1px solid #D0D5DD',borderRadius:'6px',fontSize:'14px',fontWeight:'500'}}>Register FIR</button>
                </div>
            </div>
        </div>
        <div style={{position:'relative',height: '100vh'}}>
            <div style={{position:'absolute',bottom:'0',width:'100%',height: '100%',background:'#EAECF0'}}>
                <Splitter className='m-3' style={{ height: '100%',borderRadius:'9px',borderWidth:'2px' }} layout="vertical">


                    <SplitterPanel size={80} className='grid m-0' style={{position:'relative',background:'#F2F4F7'}}>

                        {/* navbar details */}
                        <div className='col-12'>
                            <div className='grid m-0 p-3 w-full pt-0' style={{border:'1px solid #D0D5DD',borderRadius:'8px',background:'#FFFFFF'}}>
                                <div className='grid col-12 md:col-7 pb-0 mt-2' style={{gap:'24px'}}>
                                    <div className='col-12 md:col-3 flex align-items-center' style={{gap:'12px'}}>
                                        <span className='flex align-items-center justify-center' style={{minWidth:'28px',height:'28px',background:'#1D2939',fontSize:'16px',fontWeight:'500',color:'#FFFFFF',borderRadius:'5px'}}>
                                            1
                                        </span>
                                        <p style={{margin:'0',fontSize: '18px',fontWeight: '500',color:'#1D2939'}}>Basic details</p>
                                    </div>
                                    <div className='col-12 md:col-7 flex align-items-center' style={{background:'#F9FAFB',border:'0.8px solid #D0D5DD',padding:'8px',borderRadius:'6px'}}>
                                        <div className='flex align-items-center' style={{gap:'4px'}}>
                                            <span className='flex align-items-center justify-center' style={{width:'12px',height:'12px',background:'#1570EF',fontSize:'8px',fontWeight:'500',color:'#FFFFFF',borderRadius:'50%'}}>
                                                i
                                            </span>
                                            <p style={{margin:'0',fontSize: '14px',fontWeight: '400',color:'#1D2939'}}>For more information</p>
                                        </div>
                                        <hr style={{width:'16px',border:'1px solid #D0D5DD',rotate:'90deg'}} />
                                        <div className='flex align-items-center' style={{gap:'4px'}}>
                                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9444 5.72222L10.8336 6.83333L9.72219 5.72222M10.9695 6.55556C10.9896 6.37315 11 6.18778 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C7.5707 11 8.97225 10.2757 9.88889 9.14296M6 3.22222V6L7.66667 7.11111" stroke="#1570EF" strokeWidth="1.25"/>
                                            </svg>
                                            <p style={{margin:'0',fontSize: '14px',fontWeight: '400',color:'#1D2939'}}>To check previous logs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid col align-items-center justify-content-end gap-2 p-2 pb-0 mt-2'>
                                    <Button label="Back" severity="secondary" outlined icon="pi pi-arrow-left" style={{fontSize:'14px',padding:'8px'}} />
                                    <Button iconPos="right" label="Next" icon="pi pi-arrow-right" style={{fontSize:'14px',padding:'8px'}} />
                                </div>
                            </div>


                            {/* add new field divider */}
                            <div className='h-18rem overflow-auto'>
                                <div className='grid my-3 mx-5 cursor-pointer'>
                                    <div className="col-12 grid align-items-center justify-content-center border-dashed gap-2" style={{height:'60px',background:'#F5FAFF',borderColor:'#1570EF',borderRadius:'8px',borderWidth:'1px'}}>
                                        <span className='border-circle flex align-items-center justify-content-center' style={{width:'24px',height:'24px',background:'#1570EF',color:'#FFFFFF'}}>+</span>
                                        <p className='m-0 font-medium' style={{fontSize:'18px',color:'#1D2939'}}>Add new field</p>
                                    </div>
                                    <p className='col-12 text-center font-normal' style={{fontSize:'16px',color:'#1570EF'}}>Add divider</p>
                                </div>
                            </div>
                        </div>


                    </SplitterPanel>


                    <SplitterPanel className='grid p-3 m-0 ' size={20} minSize={5} style={{borderTop:'6px solid #1570EF',borderRadius:'8px',background:'#FCFCFD'}}>
                        <div className='col-12'>
                            <div style={{width:'100%'}}>
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
                            <div className='grid gap-3 m-0 my-3'>
                                <div className="col-12 md:col p-0">
                                    <FloatLabel className='w-full'>
                                        <InputText keyfilter="alpha"  className='figmaInputs w-full' id="labelName" maxLength={10} />
                                        <label className="figmaInputsLabel" htmlFor="labelName">Enter label name<span className='anekFont'></span></label>
                                    </FloatLabel>
                                </div>
                                <div className="col-7 md:col-3 p-0">
                                    <FloatLabel>
                                        <Dropdown
                                            value={selectedCountry}
                                            options={countries}
                                            optionLabel="name"
                                            onChange={(e) => setSelectedCountry(e.value)}
                                            filter
                                            className='singleSelectFigma w-full'
                                            itemTemplate={countryOptionTemplate}
                                        />
                                        <label className="figmaInputsLabel" htmlFor="username">Select label type<span className='anekFont'></span></label>
                                    </FloatLabel>
                                </div>
                                <div className="col-4 md:col-1 p-0">
                                    <TabView className='formBuilderNav' activeIndex={0}>
                                        <TabPanel header="1" className='formBuilderNavTabs' style={{width:'40px',height:'40px'}}>
                                        </TabPanel>
                                        <TabPanel header="2" className='formBuilderNavTabs' style={{width:'40px',height:'40px'}}>
                                        </TabPanel>
                                    </TabView>
                                </div>
                            </div>
                            <div className='grid m-0'>
                                <div className="col-12 md:col grid flex-column gap-3 mt-2">
                                    <div className="card flex justify-content-start align-items-center gap-1">
                                        <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
                                        <p className='m-0 font-normal' style={{fontSize:'16px',color:'#1D2939'}}>Tool tip required</p>
                                    </div>
                                    <div className="card flex justify-content-start align-items-center gap-1">
                                        <InputSwitch checked={checked2} onChange={(e) => setChecked2(e.value)} />
                                        <p className='m-0 font-normal' style={{fontSize:'16px',color:'#1D2939'}}>Supporting text required</p>
                                    </div>
                                    <div className="card flex justify-content-start align-items-center gap-1">
                                        <InputSwitch checked={checked3} onChange={(e) => setChecked3(e.value)} />
                                        <p className='m-0 font-normal' style={{fontSize:'16px',color:'#1D2939'}}>Field value required</p>
                                    </div>
                                </div>
                                <div className="col-12 md:col-4 p-0 mt-2">
                                    <div className='flex flex-column md:flex-row md:align-items-center gap-3'>
                                        <div className="card flex justify-content-start align-items-center gap-1">
                                            <InputSwitch checked={checked4} onChange={(e) => setChecked4(e.value)} />
                                            <p className='m-0 font-normal' style={{fontSize:'16px',color:'#1D2939'}}>Mandatory field</p>
                                        </div>
                                        <div className="card flex justify-content-start align-items-center gap-1">
                                            <InputSwitch checked={checked5} onChange={(e) => setChecked5(e.value)} />
                                            <p className='m-0 font-normal' style={{fontSize:'16px',color:'#1D2939'}}>Enable field history</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </SplitterPanel>


                </Splitter>
            </div>
        </div>
        </>
    )
}
