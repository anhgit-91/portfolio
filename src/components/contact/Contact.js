import "./contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <div className="text-container">
                <h1>Lets work together</h1>
                <div className="text-item">
                    <h2>Mail</h2>
                    <span>tadang.developer@gmail.com</span>
                </div>
                <div className="text-item">
                    <h2>Phone</h2>
                    <span>+61401249391</span>
                </div>
            </div>
            <div className="form-container">
                <form>
                    <input type="text" required placeholder="" />
                    <input type="email" required placeholder="" />
                    <textarea rows="8" placeholder="Message"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
