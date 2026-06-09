import "@testing-library/jest-dom";
import { config } from "@vue/test-utils";
import { MotionPlugin } from "@vueuse/motion";

config.global.plugins.push(MotionPlugin);
