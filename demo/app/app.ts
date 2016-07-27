import * as application from 'application';
import { AndroidActivityResultEventData } from "application";
import { isAndroid, isIOS } from "platform";
import {TNSSpotifyConstants, TNSSpotifyAuth} from 'nativescript-spotify';

/// iOS
if (isIOS) {
  class MyDelegate extends UIResponder {
    public static ObjCProtocols = [UIApplicationDelegate];

    public applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {

      // TNSSpotifyConstants.CLIENT_ID = 'your spotify client id here';
      // TNSSpotifyAuth.REDIRECT_URL = 'tnsspotify://spotifylogin';
      TNSSpotifyConstants.CLIENT_ID = '1acac12e7fc448e188d8d70aa14249df';
      TNSSpotifyAuth.REDIRECT_URL = 'shoutoutplay://spotifylogin';
      return true;
    }

    public applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation) {
      return TNSSpotifyAuth.HANDLE_AUTH_CALLBACK(url);
    }
  }
  application.ios.delegate = MyDelegate;
}

/// Android
if (isAndroid) {
  TNSSpotifyConstants.CLIENT_ID = '1acac12e7fc448e188d8d70aa14249df';
  TNSSpotifyAuth.REDIRECT_URL = 'shoutoutplay://spotifylogin';
}

application.mainModule = "main-page";
application.cssFile = "./app.css";
application.start({ moduleName: 'main-page' });