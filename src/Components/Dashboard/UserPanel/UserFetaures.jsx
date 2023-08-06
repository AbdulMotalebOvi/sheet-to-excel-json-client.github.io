import React, { useState } from 'react'
import ButtonBlack from '../../ButtonBlack/ButtonBlack';


export default function UserFetaures() {
    const [profilePicture, setProfilePicture] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        const image = e.image[0]
        if (name === 'currentPassword') {
            setCurrentPassword(value);
        } else {
            setNewPassword(value);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile picture update logic here (backend integration required).
    };
    return (
        <div>
            <h2 className='text-3xl font-bold'>Profile Picture</h2>
            <form onSubmit={handleSubmit} className='my-6 flex flex-col'>
                <label>
                    Upload Profile Picture:
                    <input
                        className="file-input file-input-bordered w-full max-w-xs"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </label>
                <div className='flex flex-col'>
                    <label>

                        <input
                            placeholder="CurrentPassword" className="input input-bordered w-full max-w-xs my-3"
                            type="password"

                            value={currentPassword}
                            onChange={handleChange}
                        />
                    </label>

                    <label>

                        <input
                            type="password"
                            placeholder="New password" className="input input-bordered w-full max-w-xs my-3"
                            value={newPassword}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <ButtonBlack title='Update' type="submit" />
            </form>
        </div>
    )
}
