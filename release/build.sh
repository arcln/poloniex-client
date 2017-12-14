#! /usr/bin/env bash

version="1.0.1"

cd ../

echo "===== BUILDING IOS RELEASE ======"

ionic cordova build ios --prod
#cp "platforms/ios/build/device/Poloniex.ipa" "release/ios/poloniex-v"$version"_signed.ipa"


echo "===== BUILDING ANDROID RELEASE ====="

ionic cordova build android --prod --release

apk="platforms/android/build/outputs/apk/android-release-unsigned.apk"
signed="release/android/poloniex-v"$version"_signed.apk"

rm $signed

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release/android/arthurchaloin.jks $apk chaloin
~/Library/Android/sdk/build-tools/25.0.3/zipalign -v 4 $apk $signed
~/Library/Android/sdk/build-tools/25.0.3/apksigner verify $signed
