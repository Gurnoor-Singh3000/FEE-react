import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default {
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      extends: ["plugin:@eslint/js/recommended", "plugin:react/recommended"],
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
