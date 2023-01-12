import ReactGA from "react-ga";

const trackingID = "UA-253981233-1"

export const initGA = () => {
    ReactGA.initialize(trackingID, { debug: true });
};

export const logVisit = () => {
    ReactGA.pageview(window.location.pathname)
}

export const sendEvent = (button) => {
    console.log('Logging...', { action: 'redirect', category: button, label: new Date() })
    ReactGA.event({ action: 'redirect', category: button, label: new Date() });
};