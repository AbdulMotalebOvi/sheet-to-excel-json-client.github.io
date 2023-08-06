
import CommonSection from "../CommonSection/CommonSection";
import Form from "./Form";

export default function SignUp() {
    const header = 'Register';
    const title = 'Register';
    const linkUp = 'SignUp'
    const sectionMarkup = CommonSection(header, title, linkUp);
    return (
        <section>
            {sectionMarkup}
            <div className="my-20 ">
                <Form />
            </div>
        </section>
    )
}