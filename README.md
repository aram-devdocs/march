
## Getting Started


```sh
npm install
```

```sh
npm run dev
```

## Packaging

Run `npm run package` to build and package your electron app.

## Common issues

### xcrun: error: invalid active developer path

This is caused when elecron-builder tries to sign a build. Run `xcode-select --install` to install the necessary Xcode tools.


