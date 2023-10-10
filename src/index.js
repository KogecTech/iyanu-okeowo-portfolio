import initScrollReveal from "./scripts/scrollReveal";
import navbar from "./scripts/navbar";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
navbar();
initTiltEffect();
