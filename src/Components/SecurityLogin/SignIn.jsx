import React from "react";
import CommonSection from "../CommonSection/CommonSection";
import Form from "./Form";

export default function SignIn() {
    const header = 'Log In';
    const title = 'Login';
    const linkUp = 'Login'
    const sectionMarkup = CommonSection(header, title, linkUp);
    return (
        <section>
            {sectionMarkup}
            <div className="my-20">
                <Form />
            </div>
        </section>
    )
}