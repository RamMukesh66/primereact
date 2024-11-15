import { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";

function FormValidation() {
    var [firstName, setFirstName] = useState('');
    var [lastName, setLastName] = useState('');
    var [age, setAge] = useState(null);
    var [address, setAddress] = useState('');
    var [phoneNumber, setPhoneNumber] = useState(null);
    var [email, setEmail] = useState('');
    var [selectedCategory, setSelectedCategory] = useState('');
    var [errors, setErrors] = useState({});

    var categories = [
        { name: 'Male', key: 'M' },
        { name: 'Female', key: 'F' },
        { name: 'Others', key: 'O' }
    ];

    var validateForm = () => {
        let formErrors = {};
        if (!firstName) formErrors.firstName = "First name is required";
        if (!lastName) formErrors.lastName = "Last name is required";
        if (!age || isNaN(age) || age <= 0) formErrors.age = "Please enter a valid age";
        if (!selectedCategory) formErrors.gender = "Gender selection is required";
        if (!address) formErrors.address = "Address is required";
        if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) formErrors.phoneNumber = "Enter a valid 10-digit phone number";
        if (!email || !/\S+@\S+\.\S+/.test(email)) formErrors.email = "Enter a valid email";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    var formSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log({ firstName, lastName, age, selectedCategory, address, phoneNumber, email });
            console.log("Form submitted successfully");
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card title="User Information Form" className="p-shadow-3" style={{ width: '400px', padding: '20px' }}>
                <form onSubmit={formSubmit}>
                    <div className="no-padding-input" style={{ marginBottom: '1.5rem' }}>
                        <FloatLabel>
                            <InputText id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ width: '100%' }} />
                            <label htmlFor="firstName">First Name</label>
                        </FloatLabel>
                        {errors.firstName && <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>{errors.firstName}</span></div></p>}
                    </div>
                    
                    <div className="no-padding-input" style={{ marginBottom: '1.5rem' }}>
                        <FloatLabel>
                            <InputText id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ width: '100%' }} />
                            <label htmlFor="lastName">Last Name</label>
                        </FloatLabel>
                        {errors.lastName && <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>{errors.lastName}</span></div></p>}
                    </div>
                    
                    <div className="no-padding-input" style={{ marginBottom: '1.5rem' }}>
                        <FloatLabel>
                            <InputNumber id="age" value={age} onChange={(e) => setAge(e.value)} mode="decimal" style={{ width: '100%' }} />
                            <label htmlFor="age">Age</label>
                        </FloatLabel>
                        {errors.age && <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>{errors.age}</span></div></p>}
                    </div>
                    
                    <div className="" style={{ marginBottom: '1.5rem' }}>
                        <label>Gender</label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {categories.map((category) => (
                                <div key={category.key} style={{ display: 'flex', alignItems: 'center' }}>
                                    <RadioButton
                                        inputId={category.key}
                                        name="category"
                                        value={category.key}
                                        onChange={(e) => setSelectedCategory(e.value)}
                                        checked={selectedCategory === category.key}
                                    />
                                    <label htmlFor={category.key} style={{ marginLeft: '5px' }}>{category.name}</label>
                                </div>
                            ))}
                        </div>
                        {errors.gender && <p className="error_msg_class"  style={{top:'2px'}}><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>{errors.gender}</span></div></p>}
                    </div>
                    
                    <div className="no-padding-input" style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="address">Address</label>
                        <InputTextarea id="address" className="border-radius-6" variant="filled"  value={address} onChange={(e) => setAddress(e.target.value)} style={{width:'100%'}} />
                        {errors.address && <p className="error_msg_class" style={{top:'-6px'}}><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>{errors.address}</span></div></p>}
                    </div>
                    
                    <div className="no-padding-input" style={{ marginBottom: '1.5rem' }}>
                        <FloatLabel>
                            <InputNumber id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.value)} style={{ width: '100%' }} />
                            <label htmlFor="phoneNumber">Phone Number</label>
                        </FloatLabel>
                        {errors.phoneNumber && <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>{errors.phoneNumber}</span></div></p>}
                    </div>
                    
                    <div className="no-padding-input" style={{ marginBottom: '1.5rem' }}>
                        <FloatLabel>
                            <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%' }} />
                            <label htmlFor="email">Email</label>
                        </FloatLabel>
                        {errors.email && <p className="error_msg_class"><div style={{display:'flex',alignItems:'center',gap:'6px'}}><i style={{rotate:'180deg'}} className='pi pi-info error_icon_field'></i><span>{errors.email}</span></div></p>}
                    </div>
                    
                    <Button label="Submit" type="submit" className="p-button-primary" style={{ width: '100%' }} />
                </form>
            </Card>
        </div>
    );
}

export default FormValidation;