import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

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
    }
];


export default function TableComponent() {
    var [products, setProducts] = useState([]);
    var [selectedProducts, setSelectedProducts] = useState(null);
    var [editingRows, setEditingRows] = useState({});
    const [globalFilter, setGlobalFilter] = useState('');

    useEffect(() => {
        setProducts(UserData);
    }, []);

    var gradingTemplate = (rowData) => {
        return (
            <span className={`grading-label grading-${rowData.grading.toLowerCase()}`}>
                {rowData.grading}
            </span>
        );
    };

    var subjectEditor = (rowData) => {
        return (
            <div style={{border:'1px solid #ccc',padding:'10px',borderRadius:'6px',display: 'flex',alignItems:'center',gap: '8px'}}>
                <i className='pi pi-file-pdf' style={{color: '#d32f2f',fontSize:'20px'}}></i>{rowData.subject}
            </div>
        );
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
            >
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>

                <Column field="createdAt" header="Created as" sortable></Column>

                <Column 
                    field="organisation" 
                    header="Organisation" 
                    editor={(options) => textEditor(options)}
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
                    sortable>
                </Column>
                
                <Column rowEditor header="Action" headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            
            </DataTable>

        </div>
    );
}