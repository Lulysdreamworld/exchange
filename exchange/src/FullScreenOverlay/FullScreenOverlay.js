import './FullScreenOverlay.css';
import { useState } from 'react';

function Overlay({ visibility }) {

  const [overlay, setOverlay] = useState(false);

  function handleOverlay() {
    setOverlay(!overlay);
  }

  return (
    <div onClick={handleOverlay}>
      <div className={visibility ? "overlay tapped" : "overlay"}>

        <div className="container">
          <div className='wrapper'>
            <p className="label">?</p>
          </div>
        </div>

      </div>

      <div className={overlay ? "content fullscreen" : "content"}>

        <div className="wrapper">
          <div className="block">
            <div className="topBar">
              <h1 className="title">Back to the Future (of Collecting)</h1>
              <p className="close">Close X</p>
            </div>
            <p className="body">Dive into a unique web app that explores the evolving nature of collecting. Each card reveals a glimpse into the potential futures of this timeless act—how it may grow, transform, or even decline. Will collecting remain a pursuit of beauty and curiosity, or will it shift toward survival and utility?</p>
            <p className="body">Collect cards by exploring scenarios, trade with others to expand your collection, and reflect on the possible paths collecting may take in the future.</p>
            <p className="body">Start building your collection now and shape your vision of tomorrow!</p>
          </div>
        </div>

        <div className="wrapper">
          <div className="block">
            <h1 className="title">How To Play</h1>
            <p className="body">The experience differs slightly depending on whether you're on a mobile device or trying it on the cyberdeck. Follow these steps to start playing:</p>
          </div>

          <div className="block">
            <h3 className="heading">On Mobile</h3>
            <p className="body"><span className="highlight">1. Reload the Page /</span> Refresh the app and roll the dice.</p>
            <p className="body"><span className="highlight">2. Read the Description /</span> Review the details about the items and learn about their future.</p>
            <p className="body"><span className="highlight">3. Tap “Add to Wallet”/</span> Save the card to your wallet collection.</p>
            <p className="body"><span className="highlight">4. Repeat or Trade /</span> Continue collecting or trade cards with others by scanning their QR codes.</p>
          </div>

          <div className="block">
            <h3 className="heading">On Cyberdeck</h3>
            <p className="body"><span className="highlight">1. Press One of the Four Buttons /</span> Roll the dice for an item.</p>
            <p className="body"><span className="highlight">2. Read the Description /</span> Learn about the details of the future of these items.</p>
            <p className="body"><span className="highlight">3. Repeat /</span> Continue pressing buttons and learn about the future of collecting.</p>
          </div>
        </div>

        <div className="wrapper">
          <div className="block">
            <h1 className="title">Motivation for Collecting</h1>
            <p className="body">The act of collecting can be divided into three categories, reflecting human faculties: the will (survival), the feeling of pleasure and displeasure (desire), and cognition (knowledge). These correspond to the concepts of the good, the beautiful, and the true. Knowledge seeks the true, disinterested desire relates to the beautiful, and the will for survival connect to the good and the useful. Collections may thus aim to explore truth, reflect a disinterested appreciation of curiosities, or focus on utility. While mixtures exist, understanding begins with these pure forms.</p>
            <p className="body">When examining an item, the motivation is summarized as: <span className="highlight">SURV (will for survival), DESI (desire or pleasure of collecting), and KNOW (pursuit of knowledge)</span>. This may help assesing the motivation for collecting, even though there may be overlap between the three categories.</p>
          </div>

          <div className="block">
            <h3 className="heading">Survival</h3>
            <p className="body">Collecting stems from a primal survival instinct, the hunger to gather essentials like food and water to endure life’s challenges. In humans, this drive evolves into an unbounded desire for more—wealth, power, and possessions—pushing beyond need into excess. Money becomes the ultimate symbol of this instinct, a universal tool to fulfill any desire. Those who accumulate enough wealth can transform abstract value into tangible possessions. Yet this hunger can spiral into extremes, as seen in the miser who hoards endlessly, driven by the growth of wealth itself. At its core, collecting reflects humanity’s enduring struggle for survival, transformed into an insatiable pursuit of power.</p>
          </div>

          <div className="block">
            <h3 className="heading">Desire</h3>
            <p className="body">The passionate collector, driven by pure pleasure, gathers culturally valued objects, not ordinary items. Living things are not collected; they make one a pet owner, not a collector. What is collected is what has been removed from circulation by nature and culture. Like art in an exhibition, collected items become pure things, almost fetishistic and untouchable. The collector affirms their uniqueness through singular objects, though others can collect them too. Their true realm is the private cabinet, a sanctuary away from the public. Between collecting for utility and collecting for pure interest lies the collection of knowledge.</p>
          </div>

          <div className="block">
            <h3 className="heading">Knowledge</h3>
            <p className="body">Knowledge requires the collection of sensory impressions, but simply gathering them does not lead to true understanding. Our cognition depends on organizing and accumulating these perceptions, allowing us to recognize and make sense of the world. Without this process, we cannot identify objects or form coherent experiences. In contrast, some philosophers argue that truth comes not from accumulation, but from sudden insight or illumination. Plato, for example, suggests that the soul already holds knowledge from past lives, with new understanding emerging through recollection, blending innate knowledge with the process of collecting.</p>
            <p className="highlight">Further Reading: Brandt, Reinhard. (1994). Das Sammeln der Erkenntnis. In Andreas Grote: Macrocosmos in Microcosmo. Wiesbaden: Springer Fachmedien. 21–34. </p>
          </div>
        </div>

        <div className="wrapper">
          <div className="block">
            <img className="img" src="./img/voros.png"></img>
            <h1 className="title">The Future Cones</h1>
            <p className="body">Joseph Voros' <i>Future Cone</i> is a tool used in futures studies to visualize different types of possible futures. It represents various scenarios in a cone shape, with the present moment at the tip and a widening range of potential futures as time progresses. The cone is divided into layers, each representing different levels of possibility: from probable futures (based on current trends) to plausible futures (which could happen given certain conditions), and even preposterous or highly improbable futures. The model helps to understand the uncertainty and range of outcomes <i>over time</i>.</p>
            <p className="body">Each collectible item is marked with an abbreviated layer notation: <span className="highlight">probable (PROB), plausible (PLAUS), and preposterous (PREP) futures</span>. It helps explore various scenarios and assess the uncertainty of the event or object.</p>
          </div>

          <div className="block">
            <h3 className="heading">Probable Futures</h3>
            <p className="body">This class of futures includes those considered ‘<i>likely</i> to happen,’ based on the continuation of current <i>trends</i>. The most likely future, often called ‘business-as-usual,’ is a simple linear extension of the present. However, trends may not continue indefinitely and can be disrupted or replaced unexpectedly. While some see trend analysis as central to foresight, it produces a narrower range of futures, leading to limited perspectives. The key question for Probable futures is: ‘What is <i>likely</i> to happen?’.</p>
          </div>

          <div className="block">
            <h3 className="heading">Plausible Futures</h3>
            <p className="body">This class includes futures that ‘<i>could</i> happen’ based on <i>current knowledge</i> of how the world works, rather than future discoveries. They stem not from specific facts but from our more general knowledge of ‘how things work,’ such as physical laws, causation, or human systems. For example, replacing the global economy with a system based on ‘hugs and kisses’ instead of currency would fall outside what is currently considered plausible. While such a system is possible, it is not plausible by today’s standards. This category represents a smaller subset of futures than the possible. The key question for Plausible futures is: ‘What <i>could</i> happen?’.</p>
          </div>

          <div className="block">
            <h3 className="heading">Preposterous Futures</h3>
            <p className="body">This class of futures includes all imaginable scenarios—those that ‘<i>might</i> happen’—no matter how unlikely, far-fetched, or absurd. They may rely on knowledge we do not yet possess (e.g., Star Trek’s ‘warp drive’) or outright defy current physical laws. Such futures could range from time travel to entire civilizations communicating telepathically or existing in alternate dimensions. While these scenarios may seem preposterous, they are not entirely ruled out by the limitless possibilities of <i>future knowledge</i>. The key question for Possible futures is: ‘What <i>might</i> happen?’ often based on ideas beyond current understanding.</p>
            <a className="highlight" href="https://doi.org/10.1108/14636680310698379" target="_blank">Further Reading: Voros, Joseph. (2003). A generic foresight process framework. Foresight. 5. 10-21. 10.1108/14636680310698379. </a>
          </div>

          <div className="block">

            <div className="footer">
              <p className="highlight">Made with ♥</p>

              <div className="icon-wrapper">
                <a href="https://github.com/lulysdreamworld/exchange" target="_blank">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" />
                  </svg>
                </a>

                <a href="https://fg.thws.de" target="_blank">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 90">
                    <g id="type">
                      
                        <path d="M113.6,8.5h12.3v7.9h-10.3c-2.3,0-3.7,1-3.7,3.5v4.5h11.8v7.9h-11.8v28.7h-8.9v-28.7h-9.4v-7.9h9.4v-5.5c-.1-6.7,3.9-10.4,10.6-10.4Z"></path>
                        <path d="M124.7,65.3c0-3.1,1.6-5.8,4.6-7.4-2-1.4-3.2-3.5-3.2-5.9,0-3,1.8-5.8,6-7-3.1-2.3-4.6-5.6-4.6-9,0-7,5.4-12.5,14.8-12.5,5.8,0,10.7,2.9,12.4,6.7v-1.2c0-3.7,2.2-4.6,4.6-4.6h5.4v7.9h-6.1c-.9,0-1.4.4-1.4,1.5v2.8c0,7.6-6.1,12.5-14.4,12.5h-6.1c-1.8,0-2.9.8-2.9,2.3,0,1.6,1.3,2.4,2.9,2.4h13c7.5,0,11.8,3.8,11.8,9.9s-3.5,10.8-12.2,10.8h-13c-8.1,0-11.6-4.1-11.6-9.2ZM137.6,67.6h11.3c2.3,0,4.2-1.2,4.2-3.7,0-2-1.6-3.1-3.9-3.1h-11.5c-3.1,0-4.5,1.5-4.5,3.5,0,1.9,1.3,3.3,4.4,3.3ZM142.4,42.2c4,0,6.4-2.3,6.4-6s-2.5-6-6.4-6-6.4,2.4-6.4,6,2.5,6,6.4,6Z"></path>
                        <path d="M167.4,49.6h10.6v11.4h-10.6v-11.4Z"></path>
                        <path d="M188.2,51.7v-19.4h-9.4v-7.9h9.4v-10.7h8.9v10.7h11.2v7.9h-11.2v17.4c0,2.4.9,3.5,3.5,3.5h7.7v7.9h-10.7c-6.4-.1-9.4-2.7-9.4-9.4Z"></path>
                        <path d="M213.7,8.5h8.9v18.7c2.3-2.6,5.8-4,9.9-4,9,0,14.5,5.7,14.5,15.6v22.2h-8.9v-21.2c0-5.7-2.7-8.4-7.4-8.4s-8.1,3.5-8.1,8.7v20.9h-8.9V8.5Z"></path>
                        <path d="M249.9,24.4h9.3l7.1,26.6,7.1-26.6h10.3l7.1,26.6,7.1-26.6h9.3l-10.9,36.6h-10.6l-7.1-26.5-7.2,26.5h-10.6l-10.9-36.6Z"></path>
                        <path d="M308.5,50.3h9.2c.3,3.1,2.9,4.6,7.4,4.6,4,0,6.5-1.7,6.5-4.4,0-2.3-1.8-3.5-5-3.8l-5.8-.6c-6.8-.8-11.1-4.8-11.1-11,0-7.3,5.8-11.8,15.1-11.8s15.1,3.9,15.5,11.5h-8.9c-.2-2.9-2.7-4.3-6.8-4.3-3.8,0-6.2,1.5-6.2,4,0,2.2,1.7,3.4,5.4,3.8l5.9.7c6.9.8,10.9,4.9,10.9,10.9,0,7.3-6.1,12.1-15.8,12.1-10,.1-16-3.9-16.3-11.7Z"></path>
                      </g>
                      
                    <g id="image">
                      <g>
                        <path d="M71.4,12.2h-2.5c-1,0-1.8.8-1.8,1.8v8.5c0,1,.8,1.8,1.8,1.8h2.5c1,0,1.8-.8,1.8-1.8v-8.5c0-1-.8-1.8-1.8-1.8"></path>
                        <path d="M59.2,12.2h-8.6c-1,0-1.8.8-1.8,1.8v2.5c0,1,.8,1.8,1.8,1.8h2.5c1,0,1.8.8,1.8,1.8v26.8c0,1,.8,1.8,1.8,1.8h2.5c1,0,1.8-.8,1.8-1.8V14.1c0-1.1-.9-1.9-1.8-1.9"></path>
                        <path d="M59.2,54.9h-2.5c-1,0-1.8.8-1.8,1.8v8.6c0,1-.8,1.8-1.8,1.8h-2.5c-1,0-1.8.8-1.8,1.8v2.5c0,1,.8,1.8,1.8,1.8h2.5c1,0,1.8-.8,1.8-1.8v-2.4c0-1,.8-1.8,1.8-1.8h2.5c1,0,1.8-.8,1.8-1.8v-8.6c0-1-.9-1.9-1.8-1.9"></path>
                        <path d="M48.8,44.5c0-1-.8-1.8-1.8-1.8h-2.5c-1,0-1.8.8-1.8,1.8v8.6c0,1-.8,1.8-1.8,1.8h-2.4c-1,0-1.8.8-1.8,1.8v2.5c0,1,.8,1.8,1.8,1.8h2.5c1,0,1.8-.8,1.8-1.8v-2.5c0-1,.8-1.8,1.8-1.8h2.5c1,0,1.8-.8,1.8-1.8v-8.6h-.1Z"></path>
                        <path d="M14,30.5h2.5c1,0,1.8-.8,1.8-1.8v-8.6c0-1,.8-1.8,1.8-1.8h2.5c1,0,1.8-.8,1.8-1.8v-2.5c0-1-.8-1.8-1.8-1.8h-2.5c-1,0-1.8.8-1.8,1.8v2.4c0,1-.8,1.8-1.8,1.8h-2.5c-1,0-1.8.8-1.8,1.8v8.5c0,1.2.8,2,1.8,2"></path>
                        <path d="M4.3,54.9H1.8c-1,0-1.8.8-1.8,1.8v2.5c0,1,.8,1.8,1.8,1.8h2.5c1,0,1.8-.8,1.8-1.8v-2.5c0-.9-.9-1.8-1.8-1.8"></path>
                        <path d="M34.8,79.3H14c-1,0-1.8.8-1.8,1.8v2.5c0,1,.8,1.8,1.8,1.8h20.8c1,0,1.8-.8,1.8-1.8v-2.5c0-1-.8-1.8-1.8-1.8"></path>
                        <path d="M24.4,34.8v24.5c0,1,.8,1.8,1.8,1.8h2.5c1,0,1.8-.8,1.8-1.8v-26.9c0-1,.8-1.8,1.8-1.8h8.6c1,0,1.8.8,1.8,1.8v2.5c0,1,.8,1.8,1.8,1.8h2.5c1,0,1.8-.8,1.8-1.8v-8.6c0-1-.8-1.8-1.8-1.8h-14.7c-1,0-1.8.8-1.8,1.8v2.5c0,1-.8,1.8-1.8,1.8h-2.5c-1,0-1.8.8-1.8,1.8v2.4h0Z"></path>
                        <path d="M59.2,0h-20.8c-1,0-1.8.8-1.8,1.8v2.5c0,1,.8,1.8,1.8,1.8h20.8c1,0,1.8-.8,1.8-1.8V1.8c0-.9-.9-1.8-1.8-1.8"></path>
                        <path d="M32.3,18.3h2.5c1,0,1.8-.8,1.8-1.8v-2.5c0-1-.8-1.8-1.8-1.8h-2.5c-1,0-1.8.8-1.8,1.8v2.4c0,1.1.8,1.9,1.8,1.9"></path>
                        <path d="M40.9,67.1h-20.8c-1,0-1.8-.8-1.8-1.8v-8.6c0-1-.8-1.8-1.8-1.8h-2.5c-1,0-1.8.8-1.8,1.8v14.6c0,1,.8,1.8,1.8,1.8h26.8c1,0,1.8-.8,1.8-1.8v-2.3c.1-1.1-.8-1.9-1.7-1.9"></path>
                        <path d="M4.3,67.1H1.8c-1,0-1.8.8-1.8,1.8v2.5c0,1,.8,1.8,1.8,1.8h2.5c1,0,1.8-.8,1.8-1.8v-2.4c0-1.1-.9-1.9-1.8-1.9"></path>
                        <path d="M14,48.8h2.5c1,0,1.8-.8,1.8-1.8v-8.5c0-1-.8-1.8-1.8-1.8h-2.5c-1,0-1.8.8-1.8,1.8v8.5c0,1,.8,1.8,1.8,1.8"></path>
                        <path d="M71.4,30.5h-2.5c-1,0-1.8.8-1.8,1.8v2.5c0,1,.8,1.8,1.8,1.8h2.5c1,0,1.8-.8,1.8-1.8v-2.5c0-1-.8-1.8-1.8-1.8"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Overlay;
