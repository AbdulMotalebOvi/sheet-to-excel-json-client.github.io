import React from 'react'

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div>
            <label>
                <h1>hiiii</h1>
                Dark Mode:
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />
            </label>
        </div>
    )
}
