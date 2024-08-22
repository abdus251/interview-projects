import QRCode from 'react-qr-code';
import './style.css';
import { useState } from 'react';
export default function QRCodeGenerator(){

function handleGenerateQrCode(){
    setQrCode(input);
    setInput('')
}
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    return (
    <div className="">
        <h1>QR code generator</h1>
        <div>
            <input 
            onChange={(e) => setInput(e.target.value)} 
            type='text' 
            name='qr-code' 
            value={input}
            placeholder='Enter Your Value Here'
            />
            <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode}
            >Generate
            </button>
        </div>
        <div>
            <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='#fff'/>
        </div>
    </div>
    )
}
