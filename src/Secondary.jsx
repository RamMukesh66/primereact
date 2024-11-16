
import React, { useEffect, useState } from 'react';
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';

function SecondComponent() {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [richTextEditor, setRichTextEditor] = useState('');

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const onFileUpload = (e) => {
        setUploadedFiles(e.files);
        console.log('Uploaded files:', e.files);
    };

    const removeFile = (indexToRemove) => {
        setUploadedFiles(uploadedFiles.filter((_, index) => index !== indexToRemove));
    };

    useEffect(() => {
        tinymce.init({
            selector: '#myEditor',
            plugins: 'lists link image code',
            toolbar: 'undo redo | formatselect | forecolor | bold italic underline strikethrough | alignleft aligncenter alignright | bullist numlist | link image code blockquote',
            height: 320,
            setup: editor => {
                editor.on('change', () => {
                    setRichTextEditor(editor.getContent());
                });
            },
            menubar: false
        });
    
        return () => {
            tinymce.remove();
        };
    }, []); 

    const getFileIconAndColor = (fileName) => {
        const extension = fileName.split('.').pop().toLowerCase();
        switch (extension) {
            case 'pdf':
                return { icon: 'pi pi-file-pdf', color: '#d32f2f' }; // Red color for PDF
            case 'xls':
            case 'xlsx':
                return { icon: 'pi pi-file-excel', color: '#2e7d32' }; // Green color for Excel
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                return { icon: 'pi pi-image', color: '#0288d1' }; // Blue color for images
            default:
                return { icon: 'pi pi-file', color: '#6c757d' }; // Default icon and gray color
        }
    };
    
    return (
        <>
            <div style={{
                display:'flex',
                flexDirection:'column',
                marginTop:'30px'
            }}>
                <label 
                    style={{
                        fontSize:'16px',
                        fontWeight:'400',
                        color:'rgba(29, 41, 57, 1)',
                        marginBottom:'6px'
                    }} 
                    
                    htmlFor="">
                    Long Text
                </label>
                <InputTextarea className="border-radius-6" value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)} rows={5} cols={77} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
                <textarea id="myEditor"></textarea>
            </div>

            <div style={{ width: '300px', margin: '20px auto' }}>
                <h3>Upload Files</h3>
                <FileUpload
                    name="demo[]"
                    auto
                    customUpload
                    uploadHandler={onFileUpload}
                    multiple
                    accept=""
                    maxFileSize={1000000}
                    chooseLabel="Attach Files"
                    emptyTemplate={<p style={{ display: 'none' }}></p>}
                />
            <div style={{ marginTop: '20px' }}>
                <h4>Attachments</h4>
                <div style={{ display:'flex',flexWrap:'wrap',gap:'5px' }}>
                    {uploadedFiles.map((file, index) => {
                        const { icon, color } = getFileIconAndColor(file.name);
                        return (
                            <div key={index} className="border-radius-6" style={{ display: 'flex', alignItems: 'center', padding: '6px', marginBottom: '5px', borderRadius: '6px', backgroundColor: '#f9f9f9' }}>
                                <i className={icon} style={{ color, fontSize: '1.7em', marginRight: '8px' }}></i>
                                <span style={{ flexGrow:'1',fontSize:'16px' }}>{file.name}</span>
                                <Button
                                    icon="pi pi-times-circle"
                                    className="p-button-text p-button-primary"
                                    onClick={() => removeFile(index)}
                                    style={{ marginLeft: '10px' }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            </div>

            
        </>
    )
}

export default SecondComponent