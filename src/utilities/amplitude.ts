import amplitude from 'amplitude-js';
import { getEnv } from "./getEnv";

export const initAmplitude = () => {
  amplitude.getInstance().init(getEnv("REACT_APP_AMPLITUDE"));
};

export const sendAmplitudeEvent = (event: string) => {
  amplitude.getInstance().logEvent(event);
};