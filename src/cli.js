#! /usr/bin/env node

const program = require("commander");
const fs = require("fs");
const resolveConfig = require("tailwindcss/resolveConfig");

program
  .option("-o, --outFile <file>", "output file", "css/tailwindcss-colors.css")
  .option("-p, --prefix <string>", "variable name prefix", "tw-color-");

program.parse(process.argv);

const config = resolveConfig();
const cssDeclarations = [];

for (const colorName in config.theme.colors) {
  const colorValue = config.theme.colors[colorName];
  if (typeof colorValue === "string") {
    cssDeclarations.push({
      property: `--${program.prefix}${colorName}`,
      value: colorValue
    });
  } else if (typeof colorValue === "object") {
    const shades = Object.keys(colorValue)
      .map(x => Number.parseInt(x, 10))
      .sort();
    for (const shade of shades) {
      cssDeclarations.push({
        property: `--${program.prefix}${colorName}-${shade}`,
        value: colorValue[shade]
      });
    }
  } else {
    throw new Error(`cannot process type "${typeof colorValue}"`);
  }
}

const cssRule = `:root {
${cssDeclarations.map(d => `  ${d.property}: ${d.value};`).join("\n")}
}`;

fs.writeFileSync(program.outFile, cssRule);
