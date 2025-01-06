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
            <p className="body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="wrapper">
          <div className="block">
            <h1 className="title">How To Play</h1>
            <p className="body">Joseph Voros' <i>Future Cone</i> is a tool used in futures studies to visualize different types of possible futures. It represents various scenarios in a cone shape, with the present moment at the tip and a widening range of potential futures as time progresses. The cone is divided into layers, each representing different levels of possibility: from probable futures (based on current trends) to plausible futures (which could happen given certain conditions), and even preposterous or highly improbable futures. The model helps to understand the uncertainty and range of outcomes <i>over time</i>.</p>
            <p className="body">Each collectible item is marked with an abbreviated layer notation: <span className="highlight">probable (PROB), plausible (PLAUS), and preposterous (PREP) futures</span>. It helps explore various scenarios and assess the uncertainty of the event or object.</p>
          </div>
        </div>

        <div className="wrapper">
          <div className="block">
            <h1 className="title">Motivation for Collecting</h1>
            <p className="body">Joseph Voros' <i>Future Cone</i> is a tool used in futures studies to visualize different types of possible futures. It represents various scenarios in a cone shape, with the present moment at the tip and a widening range of potential futures as time progresses. The cone is divided into layers, each representing different levels of possibility: from probable futures (based on current trends) to plausible futures (which could happen given certain conditions), and even preposterous or highly improbable futures. The model helps to understand the uncertainty and range of outcomes <i>over time</i>.</p>
            <p className="body">Each collectible item is marked with an abbreviated layer notation: <span className="highlight">probable (PROB), plausible (PLAUS), and preposterous (PREP) futures</span>. It helps explore various scenarios and assess the uncertainty of the event or object.</p>
          </div>

          <div className="block">
            <h3 className="heading">Survival</h3>
            <p className="body">This class of futures includes those considered ‘<i>likely</i> to happen,’ based on the continuation of current <i>trends</i>. The most likely future, often called ‘business-as-usual,’ is a simple linear extension of the present. However, trends may not continue indefinitely and can be disrupted or replaced unexpectedly. While some see trend analysis as central to foresight, it produces a narrower range of futures, leading to limited perspectives. The key question for Probable futures is: ‘What is <i>likely</i> to happen?’.</p>
          </div>

          <div className="block">
            <h3 className="heading">Desire</h3>
            <p className="body">This class includes futures that ‘<i>could</i> happen’ based on <i>current knowledge</i> of how the world works, rather than future discoveries. They stem not from specific facts but from our more general knowledge of ‘how things work,’ such as physical laws, causation, or human systems. For example, replacing the global economy with a system based on ‘hugs and kisses’ instead of currency would fall outside what is currently considered plausible. While such a system is possible, it is not plausible by today’s standards. This category represents a smaller subset of futures than the possible. The key question for Plausible futures is: ‘What <i>could</i> happen?’.</p>
          </div>

          <div className="block">
            <h3 className="heading">Knowledge</h3>
            <p className="body">This class of futures includes all imaginable scenarios—those that ‘<i>might</i> happen’—no matter how unlikely, far-fetched, or absurd. They may rely on knowledge we do not yet possess (e.g., Star Trek’s ‘warp drive’) or outright defy current physical laws. Such futures could range from time travel to entire civilizations communicating telepathically or existing in alternate dimensions. While these scenarios may seem preposterous, they are not entirely ruled out by the limitless possibilities of <i>future knowledge</i>. The key question for Possible futures is: ‘What <i>might</i> happen?’ often based on ideas beyond current understanding.</p>
            <a className="highlight" href="https://doi.org/10.1108/14636680310698379" target="_blank">Further Reading: Voros, Joseph. (2003). A generic foresight process framework. Foresight. 5. 10-21. 10.1108/14636680310698379. </a>
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
