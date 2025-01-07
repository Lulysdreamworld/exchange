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
            <p className="label">ｴ</p>
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
            <p className="body"><span className="highlight">0. Go to web app /</span> Go to https://lulysdreamworld.github.io.</p>
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
        </div>
      </div>


    </div>
  );
}

export default Overlay;
