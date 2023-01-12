import ReactGA from "react-ga4";

const trackingID = "G-B5H6TX1565"

export const initGA = () => {
    ReactGA.initialize(trackingID, { debug: true });
};

export const sendEvent = (button) => {
    console.log('Logging...', { action: 'redirect', category: button, label: new Date() })
    ReactGA.event({ action: 'redirect', category: button, label: new Date() });
};