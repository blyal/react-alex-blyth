import React, {useState, useEffect} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';

function Subscribe(props) {

    const [isVerified, verifyForm] = useState(false);
    const [isSubmitted, confirmSubmission] = useState(false);
    const [subscriberName, enterSubscriberName] = useState('');
    const [subscriberEmail, enterSubscriberEmail] = useState('');
    const [subscriptions, selectSubscriptions] = useState([]);

    useEffect(() => {
        props.toggle(true, 'subscribe');
            return () => {
                props.toggle(false, 'subscribe');
            }
        }, [props]
    );

    const handleSubscriberName = e => {
        enterSubscriberName(e.target.value)
    }

    const handleSubscriberEmail = e => {
        enterSubscriberEmail(e.target.value)
    }

    const handleSubscriptions = e => {
        if (e.target.checked) {
            selectSubscriptions([...subscriptions, e.target.value])
        } else {
            selectSubscriptions(subscriptions.filter(item => item !== e.target.value))
        }
    }

    const validateCaptcha = () => {
        verifyForm(val => val = true)
    }

    const validateForm = (e) => {
        if (isVerified) {
            e.preventDefault();
            let subscriptionsString = subscriptions.toString();
            let obj = {
                "entry.1033833338": subscriberName,
                "entry.720555073": subscriberEmail,
                "entry.361511525": subscriptionsString
            }
            console.log(obj);
            postData(obj);
            confirmSubmission(val => val = true);
        } else {
            alert("Please verify that you are human!");
            e.preventDefault();
        }
    }

    const postData = async (obj) => {
        try {

            //putting together the x-www-form-urlencoded payload (https://stackoverflow.com/questions/35325370/how-do-i-post-a-x-www-form-urlencoded-request-using-fetch)
            let formBody = [];
            for (let item in obj) {
                let encodedKey = encodeURIComponent(item);
                let encodedValue = encodeURIComponent(obj[item]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");


            await fetch('https://docs.google.com/forms/d/e/1FAIpQLSf-uIM4jKIx2CFadk6WPKsi4zSkxK2tOsqtBXDdY024fzQdxQ/formResponse', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: formBody
            })
            console.log("Done");
        } catch {
            console.log("There is an error with the post function");
        }
    }

    return (
        <>
            <h2 className="cyan">Subscribe</h2>
            <hr />
            <div className="home-style subscribe-blurb">
                <p>If you'd like to hear about new content being added to the site, including blog posts, film content, information about new projects, and other random stuff, you can do that with either <strong>Instagram</strong> or <strong>email</strong>.</p>
                <p>You can receive email updates by joining the <strong>Leshgo Email Subscriber List</strong> below. Otherwise, you can follow me on Instagram via the icon at the bottom of the page (or at the top for mobile), and keep an eye out for my Leshgo stories.</p>
            </div>
            <hr />
            <div className="subscribe-container">
                <h3 className="cyan subscribe-title">Join the Leshgo Email Subscriber List</h3><br />
                
                { isSubmitted ?
                    <div className="subscribe-confirmation">
                        <p>You've just joined a very elite group ;) welcome.</p>
                    </div>
                    :
                    <form name="subscribeForm" onSubmit={validateForm}>
                        <div className="subscribe-section">
                            <div className="centered">
                                <div className="centered-outer-left-inner">
                                    <label htmlFor="subscribe-name">Name: </label> <br />
                                    <input
                                        type="text"
                                        id="subscribe-name"
                                        className="input-box"
                                        value={subscriberName}
                                        onChange={handleSubscriberName}
                                        required /> <br />
                                    <label htmlFor="subscribe-email">Email Address: </label> <br />
                                    <input
                                        type="email"
                                        id="subscribe-email"
                                        className="input-box"
                                        value={subscriberEmail}
                                        onChange={handleSubscriberEmail}
                                        required />
                                </div>
                            </div>
                        </div>
                        
                        <p>What would would you like to receive updates about?</p>

                        <div className="subscribe-section">
                            <input
                                type="checkbox"
                                id="blogUpdates"
                                name="blogUpdates"
                                value="blogPosts"
                                onChange={handleSubscriptions} />
                            <label htmlFor="blogUpdates" className="checkbox-label">Blog Posts</label> <br />
                            <input
                                type="checkbox"
                                id="codeUpdates"
                                name="codeUpdates"
                                value="codePosts"
                                onChange={handleSubscriptions} />
                            <label htmlFor="codeUpdates" className="checkbox-label">Coding Projects and Posts</label> <br />
                            <input
                                type="checkbox"
                                id="filmUpdates"
                                name="filmUpdates"
                                value="filmContent"
                                onChange={handleSubscriptions} />
                            <label htmlFor="filmUpdates" className="checkbox-label">Film Content</label> <br />
                            <input
                                type="checkbox"
                                id="randomUpdates"
                                name="randomUpdates"
                                value="coolStuff"
                                onChange={handleSubscriptions} />
                            <label htmlFor="randomUpdates" className="checkbox-label">Other Cool Stuff</label> <br />
                            <div className="centered">
                                <input type="submit" value="Leshgo!" className="button" />
                            </div>
                        </div>
                        <div className="centered">
                            <div className="captcha-container">
                                <ReCAPTCHA
                                    sitekey="6LeB0jIaAAAAAFmLd8FyF8ABLJQ2BZ-bdfMmh0K7"
                                    onChange={validateCaptcha}
                                    theme="dark"
                                />
                            </div>
                        </div>

                    </form> }
            </div>
        </>
    );
}

Subscribe.propTypes = {
    toggle: PropTypes.func.isRequired
}

export default Subscribe;