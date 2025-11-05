import "./Timeline.css";
import bimg from "../../Assets/bottom.png";

function Timeline() {
  return (
    <div className="timebody" id="Timeline">
      <div className="timeline_head">TIMELINE</div>
      <div className="maintimeline">
        <div className="maincontainer left-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-right" className="text-box lt">
            <h2>
              <b>Inaugration</b>
            </h2>
            <small>21st Nov 9:30 to 10:00</small>
            <p>
              Welcome to the dawn of innovation! Let the tech fest begin its
              electrifying journey.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="maincontainer right-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-left" className="text-box rt">
            <h2>
              <b>Free Fire - Clash for Glory</b>
            </h2>
            <small>21st Nov 12:00 to 16:00</small>
            <p>
              Welcome to the thrill of E-Sports! Drop in, gear up, 
            and fight your way to victory in India’s battlegrounds. Get ready for action!
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="maincontainer left-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-right" className="text-box lt">
            <h2>
              <b>Radiant Clash - Valorant Showdown</b>
            </h2>
            <small>21st Nov 12:00 to 16:00</small>
            <p>
              Welcome to the playground to the world of Valorant, where a game isn't just Entertainment but a sensation!
              {/* Dive into design at UI/UX! Explore the art of user interface and
              user experience creation. */}
            </p>

            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="maincontainer right-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-left" className="text-box rt">
            <h2>
              <b>Figma Clash</b>
            </h2>
            <small>22nd Nov 9:00 to 13:00</small>
            <p>
            Dive into design at UI/UX! Explore the art of user interface and
              user experience creation. e.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="maincontainer left-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-right" className="text-box lt">
            <h2>
              <b>Accuracy is all you need</b>
            </h2>
            <small>22nd Nov 9:00 to 13:00</small>
            <p>
              Welcome to the playground of Machine Learning, where accuracy is all ypou need.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="maincontainer right-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-left" className="text-box rt">
            <h2>
              <b>Treasure Hunt</b>
            </h2>
            <small>22nd Nov 10:00 to 13:00</small>
            <p>
              Get ready to unlock mysteries and uncover hidden treasures!
              Adventure awaits at every clue—let the hunt begin!
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="maincontainer left-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-right" className="text-box lt">
            <h2>
              <b>Radiant Clash - Valorant Showdown - Grand Finale</b>
            </h2>
            <small>22nd Nov 9:00 to 12:00</small>
            <p>
            The real action begins now! Witness the grand finale of Radiant Clash as top teams battle for glory and the ultimate title.
            </p>

            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="maincontainer right-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-left" className="text-box rt">
            <h2>
              <b>Simply Automation</b>
            </h2>
            <small>22nd Nov 13:00 to 16:00</small>
            <p>
            Automate the stuff no one wants to do. Make life simpler, one script at a time!
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="maincontainer left-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-right" className="text-box lt">
            <h2>
              <b>Aircrash</b>
            </h2>
            <small>22nd Nov 9:00 to 13:00</small>
            <p>
            Debate + Personality + Drama, You know where it's going!
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="maincontainer right-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-left" className="text-box rt">
            <h2>
              <b>Ending Ceremony</b>
            </h2>
            <small>22nd Nov 16:00 to 17:00</small>
            <p>
              The exhilarating conclusion of our tech fest promises electrifying
              performances, awards, and unforgettable memories.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
      <div className="timeline_img">
        <img src={bimg} alt="" />
      </div>
    </div>
  );
}

export default Timeline;
