
import React, { useEffect, useState, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from "primereact/radiobutton";
import { MultiSelect } from 'primereact/multiselect';
import { Chips } from "primereact/chips";
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
        


function NewApp() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [date, setDate] = useState('');
    var [selectedMultiCountry, setSelectedMultiCountry] = useState([]);
    const [description, setDescription] = useState(""); 

    const handleInputChange = (e) => {
        const value = e.target.value;
        setDescription(value);
    };

    const countries = [
        { name: "Bagalkot • ಬಾಗಲಕೋಟೆ ", code: "US" },
        { name: "Bellary • ಬಳ್ಳಾರಿ", code: "DE" },
        { name: "Belagavi • ಬೆಳಗಾವಿ", code: "IN" },
        { name: "Bidar • ಬೀದರ್", code: "SE" },
    ];

    const processCountryName = (name) => {
        const [englishText, kannadaText] = name.split("•").map(text => text.trim());
        return (
            <>
                {englishText} • <span className="anekFont">{kannadaText}</span>
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
                    value={option}
                    onChange={(e) => setSelectedCountry(e.value)}
                    checked={selectedCountry?.code === option.code}
                    className="mr-2"
                />
                <label htmlFor={option.code} className="singleSelectLabel">
                    {processCountryName(option.name)}
                </label>
            </div>
        );
    };


    var multiContries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    var selectedCountryNames = useMemo(() => {
        return selectedMultiCountry.map((code) => {
            const country = multiContries.find((c) => c.code === code);
            return country ? country.name : '';
        });
    }, [selectedMultiCountry]);

    var handleChipsChange = (e) => {
        var newCountryNames = e.value;

        var newCountryCodes = newCountryNames
            .map((name) => multiContries.find((c) => c.name === name)?.code)
            .filter(Boolean);

        setSelectedMultiCountry(newCountryCodes);
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
                                <label className="figmaInputsLabel" htmlFor="phonenumber">Phone number • <span className='anekFont'>ದೂರವಾಣಿ ಸಂಖ್ಯೆ</span> </label>
                            </FloatLabel>
                            <p></p>    
                        </div>

                        <div >
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="int"  className='figmaInputs' id="phonenumber" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="phonenumber">Phone number • <span className='anekFont'>ದೂರವಾಣಿ ಸಂಖ್ಯೆ</span> </label>
                            </FloatLabel>
                            <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="int"  className='figmaInputs' id="phonenumber" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="phonenumber">Phone number • <span className='anekFont'>ದೂರವಾಣಿ ಸಂಖ್ಯೆ </span></label>
                            </FloatLabel>
                            <p></p>    
                        </div>
                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="int" value={9884290126} className='figmaInputs' id="phonenumber" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="phonenumber">Phone number • <span className='anekFont'>ದೂರವಾಣಿ ಸಂಖ್ಯೆ </span></label>
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
                                <label className="figmaInputsLabel" htmlFor="username">Full name • <span className='anekFont'>ಪೂರ್ಣ ಹೆಸರು </span></label>
                            </FloatLabel>
                            <p></p>    
                        </div>

                        <div >
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="alpha"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • <span className='anekFont'>ಪೂರ್ಣ ಹೆಸರು </span></label>
                            </FloatLabel>
                            <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="alpha"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • <span className='anekFont'>ಪೂರ್ಣ ಹೆಸರು </span></label>
                            </FloatLabel>
                            <p></p>    
                        </div>
                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="alpha" value={'Srikanth S'} className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • <span className='anekFont'>ಪೂರ್ಣ ಹೆಸರು </span></label>
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
                                <label className="figmaInputsLabel" htmlFor="username">District • <span className='anekFont'>ಜಿಲ್ಲೆ </span></label>
                            </FloatLabel>
                            <p></p>
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <Dropdown
                                    disabled
                                    options={countries}
                                    optionLabel="name"
                                    filter
                                    className='singleSelectFigma'
                                    itemTemplate={countryOptionTemplate}
                                />
                                <label className="figmaInputsLabel" htmlFor="username">District • <span className='anekFont'>ಜಿಲ್ಲೆ </span></label>
                            </FloatLabel>
                            <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <Dropdown
                                    disabled
                                    optionLabel="name"
                                    filter
                                    className='singleSelectFigma'
                                />
                                <label className="figmaInputsLabel" htmlFor="username">District • <span className='anekFont'>ಜಿಲ್ಲೆ</span></label>
                            </FloatLabel>
                            <p></p>    
                        </div>
                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <Dropdown
                                    disabled
                                    value="SE"
                                    options={countries}
                                    optionLabel="name"
                                    optionValue="code"
                                    filter
                                    className='singleSelectFigma'
                                />
                                <label className="figmaInputsLabel" htmlFor="username">District • <span className='anekFont'>ಜಿಲ್ಲೆ</span></label>
                            </FloatLabel>
                            <p></p>    
                        </div>

                    </div>
                </div>

                <div>
                    <p style={{marginTop:'10px'}}>Alphabets Input + Supporting text</p>

                    <div style={{display:'inline-flex',gap:'10px',flexDirection:'column'}} >

                        <div>
                            <FloatLabel>
                                <InputText keyfilter="alpha"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • <span className='anekFont'>ಪೂರ್ಣ ಹೆಸರು</span></label>
                            </FloatLabel>
                            <p style={{margin:'0'}}></p>     
                            <p className='inputSupportingText'>Place holder for supporting text</p>
                        </div>

                        <div >
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="alpha"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • <span className='anekFont'>ಪೂರ್ಣ ಹೆಸರು</span></label>
                            </FloatLabel>
                            <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                            <p className='inputSupportingText'>Place holder for supporting text</p>
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="alpha"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • <span className='anekFont'>ಪೂರ್ಣ ಹೆಸರು</span></label>
                            </FloatLabel>
                            <p style={{margin:'0'}}></p>    
                            <p className='inputSupportingText'>Place holder for supporting text</p>
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="alpha" value={'Srikanth S'} className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Full name • <span className='anekFont'>ಪೂರ್ಣ ಹೆಸರು</span></label>
                            </FloatLabel>
                            <p style={{margin:'0'}}></p>     
                            <p className='inputSupportingText'>Place holder for supporting text</p> 
                        </div>

                    </div>
                </div>

            </div>

            <div style={{display:'flex',gap:'30px',marginTop:'30px'}} >

                <div>
                    <p style={{marginTop:'10px'}}>Alphabets Input + Change over URL</p>

                    <div style={{display:'inline-flex',gap:'10px',flexDirection:'column'}} >

                        <div>
                            <FloatLabel>
                                <InputText keyfilter="int"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Phone number • <span className='anekFont'>ದೂರವಾಣಿ ಸಂಖ್ಯೆ</span></label>
                            </FloatLabel>
                            <p style={{margin:'0'}}></p>     
                            <p className='inputChangeUrlText'>Use email address</p>
                        </div>

                        <div >
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="int"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Phone number • <span className='anekFont'>ದೂರವಾಣಿ ಸಂಖ್ಯೆ</span></label>
                            </FloatLabel>
                            <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                            <p className='inputChangeUrlText'>Use email address</p>
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="int"  className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Phone number • <span className='anekFont'>ದೂರವಾಣಿ ಸಂಖ್ಯೆ</span></label>
                            </FloatLabel>
                            <p style={{margin:'0'}}></p>    
                            <p className='inputChangeUrlText disbledExtraText'>Use email address</p>
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <InputText disabled keyfilter="int" value={'9884290126'} className='figmaInputs' id="username" maxLength={10} />
                                <label className="figmaInputsLabel" htmlFor="username">Phone number • <span className='anekFont'>ದೂರವಾಣಿ ಸಂಖ್ಯೆ</span></label>
                            </FloatLabel>
                            <p style={{margin:'0'}}></p>     
                            <p className='inputChangeUrlText disbledExtraText'>Use email address</p> 
                        </div>

                    </div>
                </div>

                <div>
                    <p style={{marginTop:'10px'}}>Rates Input - Rupees</p>

                    <div style={{display:'inline-flex',gap:'10px',flexDirection:'column'}} >

                        <div>
                            <div className="p-inputgroup figmaInputIcons">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-indian-rupee"></i>
                                </span>
                                <FloatLabel className=''>
                                    <InputText keyfilter="int" className='figmaIconWithinputs' />
                                    <label className="figmaInputsLabel" htmlFor="username">Seized gold • <span className='anekFont'>ವಶ ಪಡಿಸ್ಕೊಂಡ ಮೊತ್ತ</span></label>
                                </FloatLabel>
                            </div>
                            <p></p>     
                        </div>

                        <div >
                            <div className="p-inputgroup figmaInputIcons">
                                <span className="disbledFigmaIcons p-inputgroup-addon">
                                    <i className="pi pi-indian-rupee"></i>
                                </span>
                                <FloatLabel className='disbled_inputs'>
                                    <InputText disabled keyfilter="int" className='figmaIconWithinputs' />
                                    <label className="figmaInputsLabel" htmlFor="username">Seized gold • <span className='anekFont'>ವಶ ಪಡಿಸ್ಕೊಂಡ ಮೊತ್ತ</span></label>
                                </FloatLabel>
                            </div>
                            <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                        </div>

                        <div>
                            <div className="p-inputgroup figmaInputIcons">
                                <span className="disbledFigmaIcons p-inputgroup-addon">
                                    <i className="pi pi-indian-rupee"></i>
                                </span>
                                
                                <FloatLabel className='disbled_inputs'>
                                    <InputText disabled keyfilter="int" className='figmaIconWithinputs' />
                                    <label className="figmaInputsLabel" htmlFor="username">Seized gold • <span className='anekFont'>ವಶ ಪಡಿಸ್ಕೊಂಡ ಮೊತ್ತ</span></label>
                                </FloatLabel>
                            </div>
                            <p></p>    
                        </div>

                        <div>
                            <div className="p-inputgroup figmaInputIcons">
                                <span className="disbledFigmaIcons p-inputgroup-addon">
                                    <i className="pi pi-indian-rupee"></i>
                                </span>
                                <FloatLabel className='disbled_inputs'>
                                    <InputText disabled value={'2,29,000'} keyfilter="int" className='figmaIconWithinputs' />
                                    <label className="figmaInputsLabel" htmlFor="username">Seized gold • <span className='anekFont'>ವಶ ಪಡಿಸ್ಕೊಂಡ ಮೊತ್ತ</span></label>
                                </FloatLabel>
                            </div>
                            <p></p>     
                        </div>

                    </div>
                </div>


                <div>
                    <p style={{marginTop:'10px'}}>Multiple selection</p>

                    <div style={{display:'inline-flex',gap:'10px',flexDirection:'column'}} >

                    <div>
                        <div style={{position:'relative',display:'flex',flexDirection:'column'}}>
                            <MultiSelect
                                inputId='multiSelect'
                                value={selectedMultiCountry}
                                onChange={(e) => setSelectedMultiCountry(e.value)}
                                options={multiContries}
                                optionLabel="name"
                                optionValue="code"
                                filter
                                maxSelectedLabels={1}
                                style={{width:'100%'}}
                                className="custom-multiselect no-padding-input"
                            />
                            <label className='multiSelectLabel' htmlFor="multiSelect">District • <span className='anekFont'>ಜಿಲ್ಲೆ</span></label>
                        </div>
                        <Chips onChange={handleChipsChange} value={selectedCountryNames} className='noChipInputs' />
                    </div>

                    <div>
                        <div style={{position:'relative'}}>
                            <MultiSelect
                                inputId='multiSelect'
                                optionLabel="name"
                                optionValue="code"
                                filter
                                maxSelectedLabels={1}
                                disabled
                                style={{width:'100%'}}
                                className="custom-multiselect no-padding-input"
                            />
                            <label className='multiSelectLabel' htmlFor="multiSelect">District • <span className='anekFont'>ಜಿಲ್ಲೆ</span></label>
                        </div>
                        <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                    </div>

                        <div style={{position:'relative'}}>
                            <MultiSelect
                                disabled
                                optionLabel="name"
                                optionValue="code"
                                filter
                                maxSelectedLabels={1}
                                style={{width:'100%'}}
                                className="custom-multiselect no-padding-input"
                            />
                            <label className='multiSelectLabel disabledMultiSelect' htmlFor="multiSelect">District • <span className='anekFont'>ಜಿಲ್ಲೆ</span></label>
                        </div>

                    </div>
                </div>


                <div>
                    <p style={{marginTop:'10px'}}>Date selection</p>

                    <div style={{display:'inline-flex',gap:'10px',flexDirection:'column'}} >

                        <div>
                            <FloatLabel>
                                <Calendar className='figmaInputs' inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                                <label className='figmaInputsLabel' htmlFor="birth_date">Date • <span className='anekFont'>ದಿನಾಂಕ</span></label>
                                <span style={{position:'absolute',right:'15px',color:'#6c757d',top:'30%'}}><i style={{fontSize:'18px'}} className='pi pi-calendar'></i></span>
                            </FloatLabel>
                            <p></p>
                        </div>

                        <div>
                            <FloatLabel>
                                <Calendar className='figmaInputs' inputId="birth_date" disabled />
                                <label className='figmaInputsLabel' htmlFor="birth_date">Date • <span className='anekFont'>ದಿನಾಂಕ</span></label>
                                <span style={{position:'absolute',right:'15px',color:'#6c757d',top:'30%'}}><i style={{fontSize:'18px'}} className='pi pi-calendar'></i></span>
                            </FloatLabel>
                            <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <Calendar className='figmaInputs' inputId="birth_date" disabled />
                                <label className='figmaInputsLabel' htmlFor="birth_date">Date • <span className='anekFont'>ದಿನಾಂಕ</span></label>
                                <span style={{position:'absolute',right:'15px',color:'rgba(152, 162, 179, 1)',top:'30%'}}><i style={{fontSize:'18px'}} className='pi pi-calendar'></i></span>
                            </FloatLabel>
                            <p></p>
                        </div>

                        <div>
                            <FloatLabel className='disbled_inputs'>
                                <Calendar className='figmaInputs' inputId="birth_date"  dateFormat="dd/mm/yyyy" value={new Date("2024-11-11")} disabled />
                                <label className='figmaInputsLabel' htmlFor="birth_date">Date • <span className='anekFont'>ದಿನಾಂಕ</span></label>
                                <span style={{position:'absolute',right:'15px',color:'rgba(152, 162, 179, 1)',top:'30%'}}><i style={{fontSize:'18px'}} className='pi pi-calendar'></i></span>
                            </FloatLabel>
                        </div>

                    </div>
                </div>

            </div>

            <div style={{display:'flex',gap:'30px',marginTop:'30px'}} >

                <div>
                    <p style={{marginTop:'10px'}}>Long text</p>

                    <div style={{display:'inline-flex',gap:'10px',flexDirection:'column'}} >

                        <div style={{display:'flex',flexDirection:'column'}}>
                            <label className='textareaLabel'>Description • <span className='anekFont'>ವಿವರಣೆ</span> </label>
                            <InputTextarea onChange={handleInputChange} style={{resize:'none',width:'500px',height:'160px'}} maxLength={250} />
                            <p className="inputSupportingText" style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                                <span>Place holder for supporting text</span>
                                <span>{description.length}/250</span>
                            </p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column'}}>
                            <label className='textareaLabel'>Description • <span className='anekFont'>ವಿವರಣೆ</span> </label>
                            <InputTextarea style={{resize:'none',width:'500px',height:'160px'}} maxLength={250} />
                            <p className="error_msg_class" style={{top:'-10px'}}><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>Place holder for error message</span></div></p>    
                            <p className="inputSupportingText" style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                                <span>Place holder for supporting text</span>
                                <span>0/250</span>
                            </p>
                        </div>

                        <div style={{display:'flex',flexDirection:'column'}}>
                            <label className='textareaLabel' style={{color:'rgba(152, 162, 179, 1)'}}>Description • <span className='anekFont'>ವಿವರಣೆ</span> </label>
                            <InputTextarea style={{resize:'none',width:'500px',height:'160px'}} maxLength={250} disabled />
                            <p className="inputSupportingText" style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                                <span>Place holder for supporting text</span>
                                <span>0/250</span>
                            </p>
                        </div>

                    </div>

                </div>

                <div>
                    <p style={{marginTop:'10px'}}>Buttons</p>

                    <div style={{display:'inline-flex',gap:'10px',flexDirection:'column'}} >
                        <div style={{display:'flex',flexDirection:'column',gap:'15px'}}>
                            <button className='primaryBtn'>Primary button</button>
                            <button disabled className='primaryBtn primaryDisabledBtn'>Primary button</button>
                        </div>
                        <div style={{display:'inline-flex',gap:'10px',flexDirection:'column',marginTop:'30px'}}>
                            <button className='secondaryBtn'>Secondary button</button>
                            <button className='secondaryBtn secondaryDisabledBtn'>Secondary button</button>
                        </div>
                        <div style={{display:'inline-flex',gap:'30px',flexDirection:'column',marginTop:'30px'}}>
                            <button className='urlBtn'>Tertiary  or URL button</button>
                            <button className='urlBtn urlDisabledBtn'>Tertiary  or URL button</button>
                        </div>
                        <div style={{display:'inline-flex',gap:'10px',flexDirection:'column',marginTop:'30px'}}>
                            <button className='greenBtn'><i className='pi pi-save'></i>Save message</button>
                            <button className='greenBtn greenDisabledBtn'><i className='pi pi-save'></i>Save message</button>
                        </div>
                    </div>

                </div>

                

            </div>
        </>
    )
}

export default NewApp