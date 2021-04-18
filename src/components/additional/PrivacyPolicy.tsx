import React from 'react';

type IProps = {
    consented: boolean;
    confirmConsent: () => void;
}

const PrivacyPolicy = (props: IProps) => {

    return (
        <div className='App privacy-policy' style={{display: props.consented ? 'none' : 'flex'}}><div>
            <h2 className='cyan'>Before you enter...</h2>
            <div className='privacy-blurb'>
                <p>This website is totally noncommercial and no data is shared with anyone.</p>
                <p>But — the technology used to make this website may leave cookies on your device.</p>
                <p>These are not harmful or commercial cookies — I avoid using untrustworthy technologies. Google's services are used,
                   but only for the ReCaptcha Security plugin on the subscribe page, otherwise avoiding them is a high priority. DuckDuckGo for life!
                </p>
                <p>By pressing the button below, you give consent for cookies (again, the bare minimum) to be used on your device.</p>
            </div>
            <div className='privacy-button-container'>
                <button onClick={props.confirmConsent} className='button privacy-button cyan'>Vamos &#10230;</button>
            </div></div>
        </div>
    )

}

export default PrivacyPolicy;