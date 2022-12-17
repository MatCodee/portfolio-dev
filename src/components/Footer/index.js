import "./index.css";

const Footer = () => {
    return (

        <div className="footer">
            <div className="line"></div>
            <div className="footer_container">
                <div className="footer-item">
                    <h4>Contact information —</h4>
                    <p>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
                    <p> E: damian.watracz@gmail.com  
                        P: +48-517-512-348</p>
                </div>
                <div className="footer-item">
                    <h4>Latest projects —</h4>
                    <p>Iceland</p>
                    <p>Basic UX</p>
                    <p>Triniso</p>
                    <p>Symova</p>
                    <p>PMR</p>
                    <p>All projects</p>
                </div>
                <div className="footer-item">
                    <h4>Current availability —</h4>
                    <p>I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch!</p>
                </div>
                <div className="footer-item">
                    <p>Follow me on —</p>
                    <p>Dribbble</p>
                    <p>Instagram</p>
                    <p>Behance</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}

export default Footer