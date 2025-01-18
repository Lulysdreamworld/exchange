import './App.css';
import './root.css';

import { useState } from 'react';
import { Helmet } from 'react-helmet';

import StatCard from './StatCard/StatCard';
import Inventory from './Inventory/Inventory';
import { items } from './items';


function App() {

  var object = pick(items);

  // Multiply elements by its weight and create new array
  function weight(arr) {
    return [].concat(...arr.map((obj) => Array(Math.ceil(obj.weight * 100)).fill(obj)));
  }

  function pick(arr) {
    let weighted = weight(arr);
    return weighted[Math.floor(Math.random() * weighted.length)]
  }

  const rgbaToHex = (colorStr: string, forceRemoveAlpha: boolean = false) => {
    // Check if the input string contains '/'
    const hasSlash = colorStr.includes('/')
  
    if (hasSlash) {
      // Extract the RGBA values from the input string
      const rgbaValues = colorStr.match(/(\d+)\s+(\d+)\s+(\d+)\s+\/\s+([\d.]+)/)
  
      if (!rgbaValues) {
        return colorStr // Return the original string if it doesn't match the expected format
      }
  
      const [red, green, blue, alpha] = rgbaValues.slice(1, 5).map(parseFloat)
  
      // Convert the RGB values to hexadecimal format
      const redHex = red.toString(16).padStart(2, '0')
      const greenHex = green.toString(16).padStart(2, '0')
      const blueHex = blue.toString(16).padStart(2, '0')
  
      // Convert alpha to a hexadecimal format (assuming it's already a decimal value in the range [0, 1])
      const alphaHex = forceRemoveAlpha
        ? ''
        : Math.round(alpha * 255)
            .toString(16)
            .padStart(2, '0')
  
      // Combine the hexadecimal values to form the final hex color string
      const hexColor = `#${redHex}${greenHex}${blueHex}${alphaHex}`
  
      return hexColor
    } else {
      // Use the second code block for the case when '/' is not present
      return (
        '#' +
        colorStr
          .replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
          .split(',') // splits them at ","
          .filter((string, index) => !forceRemoveAlpha || index !== 3)
          .map(string => parseFloat(string)) // Converts them to numbers
          .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
          .map(number => number.toString(16)) // Converts numbers to hex
          .map(string => (string.length === 1 ? '0' + string : string)) // Adds 0 when length of one number is 1
          .join('')
      )
    }
  }

  // This function retrieves the computed background color of the body element
function updateThemeColor() {
  var bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
  
  // This finds the meta tag with name="theme-color"
  var metaTag = document.querySelector('meta[name="theme-color"]');
  
  // If the meta tag exists, update its content attribute with the background color
  if (metaTag) {
     metaTag.setAttribute('content', bgColor);
  } else {
      // If the meta tag does not exist, create a new one and append it to the head element
      var newMetaTag = document.createElement('meta');
      newMetaTag.name = "theme-color";
      newMetaTag.content = bgColor;
      document.getElementsByTagName('head')[0].appendChild(newMetaTag);
  }
}

// Execute updateThemeColor when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", updateThemeColor);

// Periodically (every 100 milliseconds), update the theme color meta tag
setInterval(updateThemeColor, 100);

  return (
    <div className="setup" style={{ backgroundColor: `var(${object.color})` }}>
      <Helmet>
        <title>{object.name} – {object.parent}</title>
        <meta name="author" content="Luyen Kallweit" />

        <link rel="apple-touch-icon" href={`${object.thumbnail}`} />
        <link rel="icon" href={`${object.thumbnail}`} />

        <meta
          name="description"
          content="Dive into a unique web app that explores the evolving nature of collecting. Each card reveals a glimpse into the potential futures of this timeless act—how it may grow, transform, or even decline. Will collecting remain a pursuit of beauty and curiosity, or will it shift toward survival and utility? Collect cards by exploring scenarios, trade with others to expand your collection, and reflect on the possible paths collecting may take in the future. Start building your collection now and shape your vision of tomorrow!"
        />
        <meta name="theme-color" content="black"></meta>

        <meta property="og:title" content="Back to the future (of Collecting)" />
        <meta property="og:image" content={`${object.thumbnail}`} />
        <meta property="og:description" content="Dive into a unique web app that explores the evolving nature of collecting. Each card reveals a glimpse into the potential futures of this timeless act—how it may grow, transform, or even decline. Will collecting remain a pursuit of beauty and curiosity, or will it shift toward survival and utility? Collect cards by exploring scenarios, trade with others to expand your collection, and reflect on the possible paths collecting may take in the future. Start building your collection now and shape your vision of tomorrow!" />
        <meta name="twitter:card" content={`${object.thumbnail}`} />
        <meta name="twitter:title" content="Back to the future (of Collecting)" />
        <meta name="twitter:image" content={`${object.thumbnail}`} />
        <meta name="twitter:description" content="Dive into a unique web app that explores the evolving nature of collecting. Each card reveals a glimpse into the potential futures of this timeless act—how it may grow, transform, or even decline. Will collecting remain a pursuit of beauty and curiosity, or will it shift toward survival and utility? Collect cards by exploring scenarios, trade with others to expand your collection, and reflect on the possible paths collecting may take in the future. Start building your collection now and shape your vision of tomorrow!" />

        <body style={`background-color: var(${object.color}); overflow: hidden;`} ></body>
      </Helmet>
      
      <div className="main">
        <video className="artwork" src={`${object.artwork}`} width="100%" height="100%" autoPlay muted loop playsInline />
        <Inventory passkit={object.passkit} />
        <StatCard
          name={object.name}
          weight={object.weight}
          motivation={object.stats.motivation}
          probability={object.stats.probability}
          description={object.description}
        />
      </div>
    </div>
  );
}

export default App;
