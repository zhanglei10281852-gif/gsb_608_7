import { config } from "@vue/test-utils";
import { MotionPlugin } from "@vueuse/motion";
import "virtual:uno.css";
import "@/styles/index.css";
import "@testing-library/jest-dom/vitest";

config.global.plugins.push(MotionPlugin);

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      media: "",
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    };
  };

window.getComputedStyle =
  window.getComputedStyle ||
  function () {
    return {
      getPropertyValue: () => "",
      getPropertyCSSValue: () => null,
      removeProperty: () => "",
      setProperty: () => "",
      item: () => "",
      getPropertyPriority: () => "",
    };
  };
