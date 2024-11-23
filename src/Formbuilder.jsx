import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
import { RadioButton } from "primereact/radiobutton";


export default function Formbuilder() {
    var [successVisible, setSuccessVisible] = useState(false);
    const categories = [
        { name: 'One sheet template', key: 'A' },
        { name: 'Template with multiple steps', key: 'M' }
    ];
    const [selectedCategory, setSelectedCategory] = useState('');

    const headerContent = (
        <img src="./lokayuktaLogo.svg" alt="" />        
    );

    return(
        <div>
            <button className='primaryBtn' onClick={() => setSuccessVisible(true)}>
                <i className='pi pi-plus'></i>
                Add New
            </button>
            <div style={{position:'relative',width:'300px',marginTop:'30px'}} >
                <Dialog 
                    header={headerContent}
                    visible={successVisible} 
                    breakpoints={{ '960px': '75vw' }}
                    style={{ width: '412px', background:'#fff', padding:'24px', borderRadius:'8px' }} 
                    onHide={() => { if (!successVisible) return; setSuccessVisible(false); }} 
                >
                    <div style={{display:'flex',flexDirection:'column',gap:'32px'}}>
                        <div>
                            <span style={{fontWeight:'400',fontSize:'18px',color:'#1D2939',lineHeight:'28px'}}>Welcome to</span><br />
                            <span style={{fontWeight:'600',fontSize:'24px',color:'#1D2939',lineHeight:'28px'}}>Lokayutkta template creation</span>
                        </div>

                        <FloatLabel>
                            <InputText keyfilter="alphanum"  className='figmaInputs fullWidth' id="phonenumber" />
                            <label className="figmaInputsLabel" htmlFor="phonenumber">Template name<span className='anekFont'></span></label>
                        </FloatLabel>

                        <div>
                            <span style={{
                                fontSize:'16px',
                                fontWeight:'400',
                                lineHeight:'28px',
                                color:'#1D2939'
                            }}> Choose how do you want to create your template </span>

                            <div style={{border:'1px solid #D0D5DD',borderRadius:'6px',background:'#F9FAFB'}}>
                                {categories.map((category,index) => {
                                    var isLastItem = index === categories.length - 1;
                                    return (
                                        <div 
                                            key={category.key} 
                                            style={{
                                                height:'40px',
                                                padding:'12px 16px',
                                                display:'flex',
                                                alignItems:'center',
                                                gap:'8px',
                                                borderBottom: isLastItem ? 'none' : '1px solid #D0D5DD',
                                            }}>
                                            <RadioButton className='radioInputWidth' inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                                            <label htmlFor={category.key} style={{fontSize:'14px',fontWeight:'400',color:'#475467'}}>{category.name}</label>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                        <button className='primaryBtn fullWidth' onClick={() => setSuccessVisible(false)}>
                            Continue
                        </button>

                    </div>
                </Dialog>
            </div>
        </div>

    )
}
