import React, { useState } from "react";
import "../../styles/profile.css";

export const Mail = () => {
    const [comments, setComments] = useState("");

    const handleComments = (event) => {
        setComments(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Codifica el contenido para ser utilizado en una URL
        const encodedComments = encodeURIComponent(comments);
        const mailtoLink = `mailto:info@binaurapp.com?subject=Feedback&body=${encodedComments}`;

        // Abre el cliente de correo con el enlace mailto
        window.location.href = mailtoLink;
    };

    const handleReset = () => {
        setComments('');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <form className="form" onSubmit={handleSubmit}>
                <h3 id="heading">Send us your Feedback</h3>
                <div className="field row-2 text-end">
                    <label htmlFor="comments" className="form-label2">Comments <span className="text-muted">(Optional)</span></label>
                    <textarea
                        id="textResized"
                        className="form-control"
                        value={comments}
                        onChange={handleComments}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="button1">Send Email</button>
                    <button type="reset" className="button1" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
};
