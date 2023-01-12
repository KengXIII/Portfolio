import ReactGA from "react-ga";

const trackingID = "UA-253981233-1"

export const initGA = () => {
    ReactGA.initialize(trackingID, { debug: true });
};

export const logVisit = () => {
    ReactGA.pageview(window.location.pathname)
}

export const sendEvent = (button) => {
    ReactGA.event({ action: 'redirect', category: button, label: new Date() });
};