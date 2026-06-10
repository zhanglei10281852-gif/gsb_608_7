module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-newline": "off",
    "no-unused-vars": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
  ignorePatterns: [
    "dist/",
    "dist-app/",
    "node_modules/",
    "docs/.vitepress/cache/",
    "docs/.vitepress/dist/",
    "coverage/",
  ],
};
