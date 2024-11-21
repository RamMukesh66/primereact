import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';

var UserData = [
    {
        id: 1,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G1'
    },
    {
        id: 2,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G2'
    },
    {
        id: 3,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G3'
    },
    {
        id: 4,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G4'
    },
    {
        id: 5,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G3'
    },
    {
        id: 1,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G1'
    },
    {
        id: 2,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G2'
    },
    {
        id: 3,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G3'
    },
    {
        id: 4,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G4'
    },
    {
        id: 5,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G3'
    },
    {
        id: 1,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G1'
    },
    {
        id: 2,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G2'
    },
    {
        id: 3,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G3'
    },
    {
        id: 4,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G4'
    },
    {
        id: 5,
        createdAt: '2nd Jun 2021',
        organisation: 'Panchamashali misalati horata samiti',
        subject: 'mysore_political.pdf',
        lastupdated: '11-11-2024 12:50PM',
        attachment: '',
        attachmentCount: 2,
        grading: 'G3'
    }
];


export default function TableComponent() {
    var [products, setProducts] = useState([]);
    var [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState('');

    const [editingRows, setEditingRows] = useState({});
    
    useEffect(() => {
        setProducts(UserData);
    }, []);

    var gradingTemplate = (rowData) => {
        return (
            <div style={{display:'flex',justifyContent:'start',alignItems:'center'}}>
                <span className={`grading-label grading-${rowData.grading.toLowerCase()}`}>
                    {rowData.grading}
                </span>
            </div>
        );
    };

    var subjectEditor = (rowData) => {
        return (
            <div style={{display:'inline-flex',flexDirection:'column',gap:'8px',justifyContent:'center'}}>
                <span style={{fontSize:'14px',lineHeight:'16px',color:'#667085',fontWeight:'400'}}>Mysore political</span>
                <div style={{display:'inline-flex',alignItems:'center',gap:'4px'}}>
                    <div style={{fontSize:'14px',lineHeight:'14px',fontWeight:'400',color:'#1D2939',border:'1px solid #D0D5DD',padding:'6px 8px',borderRadius:'6px',display: 'inline-flex',alignItems:'center',gap: '8px'}}>
                        <img src="./PDF.svg" alt="" />
                        {rowData.subject}
                    </div>
                    <span style={{width:'32px',height:'32px',borderRadius:'6px',border:'1px solid #D0D5DD',color:'#1D2939',padding:'6px 8px',fontSize:'14px',lineHeight:'14px',fontWeight:'500',display:'flex',alignItems:'center'}}>2+</span>
                </div>
            </div>
        );
    };

    var createdAs = (rowData) => {
        return (
            <span style={{
                fontSize:'14px',
                lineHeight:'14px',
                fontWeight:'400',
                color:'#667085'
            }}>
                <span style={{
                    fontWeight:'500',
                    color:'#1D2939'
                }}>
                    Event
                </span>
                <br></br>
                {rowData.createdAt}
            </span>
        );
    };

    var organisationBody = (rowData) => {
        return (
            <span style={{
                fontSize:'14px',
                lineHeight:'16px',
                fontWeight:'400',
                color:'#667085'
            }}>
                {rowData.organisation}
            </span>
        );
    };

    var lastUpdatedText = (rowData) => {
        return (
            <span style={{
                fontSize:'14px',
                lineHeight:'20px',
                fontWeight:'400',
                color:'#667085'
            }}>
                {rowData.lastupdated}
            </span>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div style={{ display: 'flex',justifyContent:'center', gap: '12px' }}>
                <Button style={{background:'transparent',border:'none',padding:'0',boxShadow:'none'}}>
                    <img src="./eye.svg" alt="" onClick={() => handleEdit(rowData)} tooltip="Edit" />
                </Button>
                <Button style={{background:'transparent',border:'none',padding:'0',boxShadow:'none'}}>
                    <img src="./tableEdit.svg" alt="" />
                </Button>
                <Button style={{background:'transparent',border:'none',padding:'0',boxShadow:'none'}}>
                    <img src="./tableTrash.svg" alt="" />
                </Button>
            </div>
        );
    };

    const handleEdit = (rowData) => {
        const newEditingRows = { ...editingRows };
        newEditingRows[rowData.id] = true;
        setEditingRows(newEditingRows);
    };
    
    var onRowEditInit = (event) => {
        var newEditingRows = { ...editingRows };
        newEditingRows[event.data.id] = true;
        setEditingRows(newEditingRows);
    };

    var onRowEditSave = (event) => {
        var { newData } = event;
        var updatedProducts = products.map((product) => (product.id === newData.id ? newData : product));
        setProducts(updatedProducts);
        var newEditingRows = { ...editingRows };
        delete newEditingRows[event.data.id];
        setEditingRows(newEditingRows);
    };

    var onRowEditCancel = (event) => {
        var newEditingRows = { ...editingRows };
        delete newEditingRows[event.data.id];
        setEditingRows(newEditingRows);
    };

    var textEditor = (options) => {
        return <InputText id="lastName" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} style={{ width: '100%' }} />                            
    };

    const getHeader = () => {
        return (
            <div style={{display:'flex',justifyContent:'end'}}>
                <IconField iconPosition="left"  style={{width:'25%'}}>
                    <InputIcon className="pi pi-search" />
                    <InputText className='border-radius-6'  style={{width:'100%'}} type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search anything" />
                </IconField>
            </div>
        );
    };

    var btnAppended = false
    useEffect(() => {
        if (!btnAppended) {
            const paginatorLast = document.querySelector(".p-paginator-last");
            console.log(paginatorLast, "paginatorLast");
            if (paginatorLast) {
                paginatorLast.insertAdjacentHTML("afterend", `<button class="smallbtn absoluteLeft"><i class="pi pi-arrow-left"></i>Back</button><button class="smallbtn absoluteRight">Next<i class="pi pi-arrow-right"></i></button>`);
                btnAppended = true;
            }
        }
    }, []);

    return (
        <div className="card">
            <DataTable
                value={products}
                selection={selectedProducts}
                onSelectionChange={(e) => setSelectedProducts(e.value)}
                dataKey="id"
                tableStyle={{ minWidth: '70rem' }}
                editMode="row"
                globalFilter={globalFilter} 
                header={getHeader   }
                editingRows={editingRows}
                onRowEditInit={onRowEditInit}
                onRowEditSave={onRowEditSave}
                onRowEditCancel={onRowEditCancel}
                paginator
                rows={5}
            >
                <Column selectionMode="multiple" headerStyle={{ width: '1rem' }}></Column>

                <Column 
                    field="createdAt" 
                    header="Created as" 
                    headerStyle={{ width: '8rem' }}
                    body={(options) => createdAs(options)} 
                    sortable>    
                </Column>

                <Column 
                    field="organisation" 
                    header="Organisation" 
                    headerStyle={{ width: '15rem' }}
                    editor={(options) => textEditor(options)}
                    body={(options) => organisationBody(options)} 
                    sortable>
                </Column>

                <Column 
                    field="subject" 
                    header="Subject" 
                    body={(options) => subjectEditor(options)} 
                    sortable>
                </Column>

                <Column
                    field="grading"
                    header="Grading"
                    body={(rowData) => gradingTemplate(rowData)}
                    sortable
                ></Column>

                <Column 
                    field="lastupdated" 
                    header="Last updated" 
                    body={(rowData) => lastUpdatedText(rowData)}
                    sortable>
                </Column>
                
                <Column headerStyle={{ paddingRight: '1.5rem',width: '8rem' }} body={actionBodyTemplate} header="Action" bodyStyle={{ textAlign: 'right' }}></Column>
            
            </DataTable>

        </div>
    );
}