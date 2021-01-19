import React, {useState, useEffect} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';

function Subscribe(props) {

    const [isVerified, verifyForm] = useState(false);

    useEffect(() => {
        props.toggle(true, 'subscribe');
        return () => {
            props.toggle(false, 'subscribe');
        }
    }, [props]
    );

    const validateCaptcha = () => {
        verifyForm(val => val = true)
    }

    const validateForm = (e) => {
        if (isVerified) {
            alert("Confirmed");
        } else {
            alert("Please verify that you are human!");
            e.preventDefault();
        }
    }

    return(
        <>
            <h2 className="cyan">Subscribe</h2>
            <hr />
            <div className="home-style subscribe-blurb">
                <p>If you'd like to hear about new content being added to the site, including blog posts, film content, information about new projects, and other random stuff, you can do that with either <strong>Instagram</strong> or <strong>email</strong>.</p>
                <p>You can receive email updates by joining the <strong>Leshgo Email Subscriber List</strong> below. Otherwise, you can follow me on Instagram via the icon at the bottom of the page (or at the top for mobile), and keep an eye out for my Leshgo stories.</p>
            </div>
            <hr />
            <div className="subscribe-container">
                <h3 className="cyan">Join the Leshgo Email Subscriber List</h3><br />
                <form name="subscribeForm" onSubmit={validateForm}>
                    <div className="subscribe-section">
                        <div className="test">
                            <div className="test2">
                                <label htmlFor="subscribe-name">Name: </label> <br />
                                <input type="text" id="subscribe-name" className="input-box" required /> <br />
                                <label htmlFor="subscribe-email">Email Address: </label> <br />
                                <input type="email" id="subscribe-email" className="input-box" required />
                            </div>
                        </div>
                    </div>
                    
                    <p>What would would you like to receive updates about?</p>

                    <div className="subscribe-section">
                        <input type="checkbox" id="blogUpdates" name="blogUpdates" value="Blog Posts" />
                        <label htmlFor="blogUpdates" className="checkbox-label">Blog Posts</label> <br />
                        <input type="checkbox" id="codeUpdates" name="codeUpdates" value="Code Posts" />
                        <label htmlFor="codeUpdates" className="checkbox-label">Coding Projects and Posts</label> <br />
                        <input type="checkbox" id="filmUpdates" name="filmUpdates" value="Film Content" />
                        <label htmlFor="filmUpdates" className="checkbox-label">Film Content</label> <br />
                        <input type="checkbox" id="randomUpdates" name="randomUpdates" value="Cool Stuff" />
                        <label htmlFor="randomUpdates" className="checkbox-label">Other Cool Stuff</label> <br />
                        <div className="test">
                            <input type="submit" value="Leshgo!" className="button" />
                        </div>
                        <ReCAPTCHA
                            sitekey="6LeB0jIaAAAAAFmLd8FyF8ABLJQ2BZ-bdfMmh0K7"
                            onChange={validateCaptcha}
                            theme="dark"
                        />
                    </div>

                </form>
            </div>

        </>
    );
}

Subscribe.propTypes = {
    toggle: PropTypes.func.isRequired
}

export default Subscribe;