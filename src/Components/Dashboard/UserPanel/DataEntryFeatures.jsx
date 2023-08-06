import React, { useState } from 'react';
import axios from 'axios';

function DataEntryFeatures() {
    const [file, setFile] = useState(null);
    const [jsonData, setJsonData] = useState(null);
    const [sheetIdentifier, setSheetIdentifier] = useState('Sheet1');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('excelFile', file);
        formData.append('sheetIdentifier', sheetIdentifier); // Append the sheet identifier to the formData

        try {
            const response = await axios.post(
                'http://localhost:5000/convert',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            setJsonData(response.data);
        } catch (error) {
            console.error(error);
            alert('An error occurred during conversion.');
        }
    };

    return (
        <div className='space-y-5'>
            <h1 className='text-2xl font-medium'>Excel to JSON Converter</h1>
            <div>
                <input
                    type='file'
                    placeholder='Insert your xlsx file'
                    className='file-input file-input-bordered file-input-info w-full max-w-xs'
                    onChange={handleFileChange}
                />
                <input
                    type='text'
                    placeholder='Sheet Identifier'
                    className='input input-bordered'
                    value={sheetIdentifier}
                    onChange={(e) => setSheetIdentifier(e.target.value)}
                />
                <button className='btn btn-primary my-5' onClick={handleFileUpload}>
                    Convert
                </button>
            </div>
            {jsonData && (
                <div>
                    <h2>Converted JSON Data</h2>
                    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default DataEntryFeatures;
