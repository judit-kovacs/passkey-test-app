# passkey-test-app

Pushing the button the `TEST_REQUEST` from `App.tsx` is sent for registering a passkey using the [react-native-passkey](https://github.com/f-23/react-native-passkey) lib. 

## Setup

Create your `.env.local` env file and set the Android asset statement domain.

After the first prebuild run the android folder is created with

```sh
npx expo prebuild
```

[Additional setup for reaching the android asset link file](https://developers.google.com/identity/fido/android/native-apps) can be added manually to the `AndroidManifest.xml` and `strings.xml` files.

Run the app with the following code, to add device selection use `--device`

```sh
npx expo run:android
```
