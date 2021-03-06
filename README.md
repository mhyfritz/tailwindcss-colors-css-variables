# tailwindcss-colors-css-variables

The [default color palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette)
from [Tailwind CSS](https://github.com/tailwindcss/tailwindcss)
as CSS custom properties (CSS variables).

`css/tailwindcss-colors.css`:

```css
:root {
  --tw-color-transparent: transparent;
  --tw-color-black: #000;
  --tw-color-white: #fff;
  --tw-color-gray-100: #f7fafc;
  --tw-color-gray-200: #edf2f7;
  /* ... */
  --tw-color-pink-800: #97266d;
  --tw-color-pink-900: #702459;
}
```

## Installation

Node

```bash
npm install tailwindcss-colors-css-variables
```

Browser

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/tailwindcss-colors-css-variables"
/>
```

## CLI usage

```bash
$ ./src/cli.js --help
Usage: cli [options]

Options:
  -o, --outFile <file>   output file (default: "css/tailwindcss-colors.css")
  -p, --prefix <string>  variable name prefix (default: "tw-color-")
  -h, --help             output usage information
```

## Full palette

![Color palette](colors.png)
