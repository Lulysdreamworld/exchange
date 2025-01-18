import './Wallet.css';
import { useState, useLayoutEffect } from 'react';

function Wallet({ visibility, passkit }) {

  const [pathToPass, setPathToPass] = useState(false);

  var os = null;

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      setPathToPass(!pathToPass);
      return os = "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      setPathToPass(!pathToPass);
      return os = "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setPathToPass(pathToPass);
      return os = "iOS";
    }

    return os = "unknown";

  }

  useLayoutEffect(() => {
    getMobileOperatingSystem();
  }, []);

  function handleTap() {
    if (pathToPass) {
      alert('It seems you are using an Android device. Unfortunately Andorid is currently not supported. Please use either a desktop or iOS device. Sorry for the inonvenience.');
    }
    else {
      return null;
    }

  }



  return (
    <a onClick={handleTap} href={pathToPass ? `javascript:void(0)` : passkit} className={visibility ? "wallet tapped" : "wallet"}>

      <div className="container">
        <div className='wrapper'>
          <p className="label">Add to Wallet</p>

        </div>
      </div>
    </a>
  );
}

export default Wallet;
