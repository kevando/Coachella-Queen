# Fest Queen

### Installation instructions

```
git clone https://github.com/kevando/Coachella-Queen
cd Coachella-Queen
npm install
react-native link
react-native run-ios
```
### Building for Android

```
git clone https://github.com/kevando/Coachella-Queen
cd Coachella-Queen
npm install
react-native link
export ANDROID_HOME=/Users/k/Library/Android/sdk
react-native run-android
```

### Deploying for Android
[Follow these instructions to sign apk file](https://facebook.github.io/react-native/docs/signed-apk-android.html)

```
cd android
./gradlew assembleRelease
```
