
import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from "primereact/radiobutton";

function NewApp() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [
        { name: "Bagalkot • ಬಾಗಲಕೋಟೆ ", code: "US" },
        { name: "Bellary • ಬಳ್ಳಾರಿ", code: "DE" },
        { name: "Belagavi • ಬೆಳಗಾವಿ", code: "IN" },
        { name: "Bidar • ಬೀದರ್", code: "SE" },
    ];

    const countryOptionTemplate = (option) => {
        return (
            <div className='singleSelectOptions'>
                <RadioButton
                    inputId={option.code}
                    name="country"
                    value={option}
                    onChange={(e) => setSelectedCountry(e.value)}
                    checked={selectedCountry?.code === option.code}
                />
                <label htmlFor={option.code}>{option.name}</label>
            </div>
        );
    };

    return(
        <>

            <div style={{display:'flex',gap:'30px',marginTop:'30px'}} >

                <div>
                    <p style={{marginTop:'10px'}}>Numerical Input</p>

                    <div style={{display:'inline-flex',gap:'10px',flexDirection:'column'}} >

                        <div>
                            <FloatLabel>
                                <InputText keyfilter="int"  className='figmaInputs' id="phonenumber" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="phonenumber">Phone number • ದೂರವಾಣಿ ಸಂಖ್ಯೆ</label>
                            </FloatLabel>
                            <p></p>    
                        </div>

                        <div >
                            <FloatLabel>
                                <InputText disabled keyfilter="int"  className='figmaInputs' id="phonenumber" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="phonenumber">Phone number • ದೂರವಾಣಿ ಸಂಖ್ಯೆ</label>
                            </FloatLabel>
                            <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="int"  className='figmaInputs' id="phonenumber" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="phonenumber">Phone number • ದೂರವಾಣಿ ಸಂಖ್ಯೆ</label>
                            </FloatLabel>
                            <p></p>    
                        </div>
                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="int" value={9884290126} className='figmaInputs' id="phonenumber" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="phonenumber">Phone number • ದೂರವಾಣಿ ಸಂಖ್ಯೆ</label>
                            </FloatLabel>
                            <p></p>    
                        </div>

                    </div>
                </div>

                <div>
                    <p style={{marginTop:'10px'}}>Alphabetical Input</p>

                    <div style={{display:'inline-flex',gap:'10px',flexDirection:'column'}} >

                        <div>
                            <FloatLabel>
                                <InputText keyfilter="alpha"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • ಪೂರ್ಣ ಹೆಸರು</label>
                            </FloatLabel>
                            <p></p>    
                        </div>

                        <div >
                            <FloatLabel>
                                <InputText disabled keyfilter="alpha"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • ಪೂರ್ಣ ಹೆಸರು</label>
                            </FloatLabel>
                            <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="alpha"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • ಪೂರ್ಣ ಹೆಸರು</label>
                            </FloatLabel>
                            <p></p>    
                        </div>
                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="alpha" value={'Srikanth S'} className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • ಪೂರ್ಣ ಹೆಸರು</label>
                            </FloatLabel>
                            <p></p>    
                        </div>

                    </div>
                </div>

                <div>
                    <p style={{marginTop:'10px'}}>Dropdown with Search</p>

                    <div style={{display:'inline-flex',gap:'10px',flexDirection:'column'}} >

                        <div>
                            <FloatLabel>
                                <Dropdown
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.value)}
                                    options={countries}
                                    optionLabel="name"
                                    filter
                                    className='singleSelectFigma'
                                    itemTemplate={countryOptionTemplate}
                                />
                                <label className="figmaInputsLabel" htmlFor="username">District • ಜಿಲ್ಲೆ</label>
                            </FloatLabel>
                            <p></p>
                        </div>

                        <div>
                            <FloatLabel>
                                <Dropdown
                                    disabled
                                    options={countries}
                                    optionLabel="name"
                                    filter
                                    className='singleSelectFigma disbled_inputs'
                                    itemTemplate={countryOptionTemplate}
                                />
                                <label className="figmaInputsLabel" htmlFor="username">District • ಜಿಲ್ಲೆ</label>
                            </FloatLabel>
                            <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                        </div>

                        <div>
                            <FloatLabel>
                                <Dropdown
                                    disabled
                                    optionLabel="name"
                                    filter
                                    className='singleSelectFigma disbled_inputs'
                                />
                                <label className="figmaInputsLabel" htmlFor="username">District • ಜಿಲ್ಲೆ</label>
                            </FloatLabel>
                            <p></p>    
                        </div>
                        <div>
                            <FloatLabel>
                                <Dropdown
                                    disabled
                                    optionLabel="name"
                                    filter
                                    className='singleSelectFigma disbled_inputs'
                                />
                                <label className="figmaInputsLabel" htmlFor="username">District • ಜಿಲ್ಲೆ</label>
                            </FloatLabel>
                            <p></p>    
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default NewApp