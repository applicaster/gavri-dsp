# A minimal DSP provider

## Run locally

```
$ npm i
$ npm run start

# Open your browser and run `http://localhost:8080/gavri-dsp/fetchData?type=search&q=private%20ryan&url=<URL_ENCODED_BASE64_OMDBAPI_KEY>`
```

## Setup on Zapp

Create a search feed on Zapp of data type `Gavri DSP > Search`
Add you omdbapi key in the ID field (no need to do base64 encoding and url encoding)

## Things to note

- Make sure you add dependency version
- Make sure you add .npmignore and ignore the .babelrc file
- Update version package both in package.json and in manifest.json (manifest_version, dependency_version)
