import { useEffect, useState, useRef, useMemo } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Chips } from "primereact/chips";

const Home = () => {
    var [selectedCountry, setSelectedCountry] = useState('');
    var [selectedMultiCountry, setSelectedMultiCountry] = useState([]);
    var [date,setDate] = useState("");
    var [draftvisible, setDraftVisible] = useState(false);
    var [successVisible, setSuccessVisible] = useState(false);
    var [deleteVisible, setDeleteVisible] = useState(false);
    var [errorMsg, setErrorMsg] = useState({dateError : "",multiError : "",singleError : ""});

    var showErrorMsg = ()=>{

        var error_flag = false;
        var errorMsg = {}
        if(!selectedCountry || selectedCountry == ''){
            error_flag = true;
            errorMsg["singleError"] = 'Please Select'
        }
        if(!selectedMultiCountry || selectedMultiCountry == ''){
            error_flag = true;
            errorMsg["multiError"] = 'Please Select'
        }
        if(!date || date == ''){
            error_flag = true;
            errorMsg["dateError"] = 'Please Select'
        }
        
        setErrorMsg(error_flag ? errorMsg : {})
    }

    useEffect(()=>{

        setErrorMsg((prevErrorMsg) => {
            var updatedErrorMsg = { ...prevErrorMsg };

            if (selectedCountry) delete updatedErrorMsg.singleError;
            if (selectedMultiCountry) delete updatedErrorMsg.multiError;
            if (date) delete updatedErrorMsg.dateError;

            return updatedErrorMsg;
        });

    },[selectedCountry,selectedMultiCountry,date])

    var successFooterBtns = (
        <div className='flex-block-container'>
            <Button style={{width:'100%',padding:'10px',fontSize:'16px'}} label="Done" className="btn btn-primary w-50" onClick={() => setSuccessVisible(false)} />
        </div>
    );

    var discardFooterBtns = (
        <div className='flex-block-container'>
            <Button className="w-50" style={{padding:'10px',fontSize:'16px'}} label="Discard" severity="secondary" outlined onClick={() => setDraftVisible(false)} />
            <Button className="w-50" style={{padding:'10px',fontSize:'16px'}} label="Save Changes" onClick={() => setDraftVisible(false)} autoFocus />
        </div>
    );

    var deleteFooterBtns = (
        <div className='flex-block-container'>
            <Button className="w-50" style={{padding:'10px',fontSize:'16px'}} label="Cancel" severity="secondary" outlined onClick={() => setDeleteVisible(false)} />
            <Button className="w-50" style={{padding:'10px',fontSize:'16px'}} label="Delete" severity="danger" onClick={() => setDeleteVisible(false)} autoFocus />
        </div>
    );

    var countries = [
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
            const country = countries.find((c) => c.code === code);
            return country ? country.name : '';
        });
    }, [selectedMultiCountry]);

    var handleChipsChange = (e) => {
        var newCountryNames = e.value;

        var newCountryCodes = newCountryNames
            .map((name) => countries.find((c) => c.name === name)?.code)
            .filter(Boolean);

        setSelectedMultiCountry(newCountryCodes);
    };

    return (
        <main className='w-screen h-screen'>

            <div style={{width:'100%', height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >

                {/* single select */}
                <div style={{position:'relative',width:'300px',marginTop:'30px'}}>
                    <FloatLabel>
                        <Dropdown
                            inputId='singleDropdown'
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.value)}
                            options={countries}
                            optionLabel="name"
                            optionValue="code"
                            filter
                            resetFilterOnHide
                            showClear = {!!selectedCountry}
                            style={{width:'100%'}}
                            className='no-padding-input'
                        />
                        <label htmlFor="singleDropdown">Dropdown</label>
                    </FloatLabel>
                    <p className={errorMsg ? errorMsg.singleError ? 'error_msg_class' : '' : '' }>{errorMsg ? errorMsg.singleError ? <div style={{display:'flex',alignItems:'center',gap:'3px'}}><i className='pi pi-info error_icon_field'></i><span>{errorMsg.singleError}</span></div> : '' : '' }</p>
                </div>

                {/* multi select */}


                <div style={{position:'relative',width:'300px',marginTop:'30px'}}>
                    <div style={{position:'relative'}} >
                        <MultiSelect
                            inputId='multiSelect'
                            value={selectedMultiCountry}
                            onChange={(e) => setSelectedMultiCountry(e.value)}
                            options={countries}
                            optionLabel="name"
                            optionValue="code"
                            filter
                            maxSelectedLabels={1}
                            style={{width:'100%'}}
                            className="custom-multiselect no-padding-input"
                        />
                        <label style={{position:'absolute',top:'25%',left:'2%',color:'#6c757d'}}>MultiSelect</label>
                    </div>
                    <p className={errorMsg ? errorMsg.multiError ? 'error_msg_class' : '' : '' }>{errorMsg ? errorMsg.multiError ? <div style={{display:'flex',alignItems:'center',gap:'3px'}}><i className='pi pi-info error_icon_field'></i><span>{errorMsg.multiError}</span></div> : '' : '' }</p>
                    <Chips onChange={handleChipsChange} value={selectedCountryNames} className='noChipInputs' style={{ width: '100%'}} />
                </div>



                {/* date select */}
                <div style={{position:'relative',width:'300px',marginTop:'15px'}} >
                    <FloatLabel>
                        <Calendar 
                            inputId="birth_date" 
                            value={date} 
                            className='no-padding-input'
                            onChange={(e) => setDate(e.value)} 
                            style={{width:'100%'}}
                            dateFormat="dd/mm/yy"
                        />
                        <label htmlFor="birth_date">Birth Date</label>

                        <span style={{position:'absolute',left:'auto',color:'#6c757d',marginLeft:'-27px',top:'30%'}}><i className='pi pi-calendar'></i></span>

                    </FloatLabel>
                    <p className={errorMsg ? errorMsg.dateError ? 'error_msg_class' : '' : '' }>{errorMsg ? errorMsg.dateError ? <div style={{display:'flex',alignItems:'center',gap:'3px'}}><i className='pi pi-info error_icon_field'></i><span>{errorMsg.dateError}</span></div> : '' : '' }</p>
                </div>

                {/* success modal */}
                <div style={{position:'relative',width:'300px',marginTop:'30px'}} >
                    <Button label="Success Modal" className="btn btn-primary block" onClick={() => setSuccessVisible(true)} />
                    <Dialog 
                        visible={successVisible} 
                        breakpoints={{ '960px': '75vw' }}
                        style={{ width: '50vw', color: '#000', background:'#fff', padding:'15px', borderRadius:'12px' }} 
                        onHide={() => { if (!successVisible) return; setSuccessVisible(false); }} 
                        footer={successFooterBtns}
                        className="no-header"
                    >
                        <div>
                            <i 
                                className="pi pi-check-circle text-success" 
                                style={{
                                    background: 'rgba(209, 250, 223, 1)', 
                                    padding: '12px', 
                                    border: '15px solid rgba(236, 253, 243, 1)', 
                                    margin: '15px 0px', 
                                    borderRadius: '50%', 
                                    fontSize: '33px'
                                }}
                            ></i>
                            <h3 style={{fontSize:'20px',fontWeight:'bold'}}>Profile Updated Successfully</h3>
                            <p style={{fontSize:'16px',color:'rgb(156 163 175)'}} className="m-0">
                                Your Dossier Social Affair profile has been updated. 
                            </p>
                        </div>
                    </Dialog>
                </div>

                {/* discard modal */}
                <div style={{position:'relative',width:'300px',marginTop:'30px'}} >
                    <Button label="Discard Modal" className="btn btn-primary block" onClick={() => setDraftVisible(true)} />
                    <Dialog 
                        visible={draftvisible} 
                        breakpoints={{ '960px': '75vw' }}
                        style={{ width: '50vw', color: '#000', background:'#fff', padding:'15px', borderRadius:'12px' }} 
                        onHide={() => { if (!draftvisible) return; setDraftVisible(false); }} 
                        footer={discardFooterBtns}
                        className="no-header"
                    >
                        <div>
                            <i 
                                className="pi pi-exclamation-triangle" 
                                style={{
                                    color : 'rgba(220, 104, 3, 1)',
                                    background: 'rgba(254, 240, 199, 1)', 
                                    padding: '12px', 
                                    border: '15px solid rgba(255, 250, 235, 1)', 
                                    margin: '15px 0px', 
                                    borderRadius: '50%', 
                                    fontSize: '33px'
                                }}
                            ></i>
                            <h3 style={{fontSize:'20px',fontWeight:'bold'}}>Unsaved changes</h3>
                            <p style={{fontSize:'16px',color:'rgb(156 163 175)'}} className="m-0">
                                Do you want to save or discard changes?
                            </p>
                        </div>
                    </Dialog>
                </div>

                {/* delete modal */}
                <div style={{position:'relative',width:'300px',marginTop:'30px'}} >
                    <Button label="Delete Modal" className="btn btn-primary block" onClick={() => setDeleteVisible(true)} />
                    <Dialog 
                        visible={deleteVisible} 
                        breakpoints={{ '960px': '75vw' }}
                        style={{ width: '50vw', color: '#000', background:'#fff', padding:'15px', borderRadius:'12px' }} 
                        onHide={() => { if (!deleteVisible) return; setDeleteVisible(false); }} 
                        footer={deleteFooterBtns}
                        className="no-header"
                    >
                        <div>
                            <i 
                                className="pi pi-info-circle" 
                                style={{
                                    color : 'rgba(217, 45, 32, 1)',
                                    background: 'rgba(254, 228, 226, 1)', 
                                    padding: '12px', 
                                    border: '15px solid rgba(254, 243, 242, 1)', 
                                    margin: '15px 0px', 
                                    borderRadius: '50%', 
                                    fontSize: '33px'
                                }}
                            ></i>
                            <h3 style={{fontSize:'20px',fontWeight:'bold'}}>Delete profile</h3>
                            <p style={{fontSize:'16px',color:'rgb(156 163 175)'}} className="m-0">
                                Are you sure you want to delete this profile? This action cannot be undone.
                            </p>
                        </div>
                    </Dialog>
                </div>
            
                {/* error trigger btns */}
                <div style={{position:'relative',width:'300px',marginTop:'30px'}} >
                    <Button severity="secondary" outlined label="Show Error Msg" className="btn btn-primary block" onClick={showErrorMsg} />
                </div>
            
            </div>

        </main>
    );
};

export default Home;
