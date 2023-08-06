import { Link } from 'react-router-dom';


export default function CommonSection(header, title, linkUp) {
    return (
        <div className="my-5 flex items-center flex-col justify-center">
            <h3 className="text-center font-medium text-black">{header}</h3>
            <div className="flex justify-center space-x-2 mt-2">
                <Link to="/" className="text-black">
                    Home /
                </Link>
                <Link to={`/${linkUp}`} className="text-black">
                    {title}
                </Link>
            </div>
        </div>

    );
}
