import React from "react";
import "./../../Styles/MainBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faFilter } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../Context/AuthProvider";
import { NavLink } from "react-router-dom";
import { open_login } from "./../Auth/Autentication";
const MainBoard = () => {
  const { frontuser, setFrontuser } = React.useContext(AuthContext);
  const db = [
    {
      game: "game-1",
      users: [
        "User-1-Game1",
        "User-2-Game1",
        "User-3-Game1",
        "User-4-Game1",
        "User-5-Game1",
        "User-6-Game1",
        "User-7-Game1",
        "User-8-Game1",
      ],
    },
    {
      game: "game-2",
      users: [
        "User-1-Game2",
        "User-2-Game2",
        "User-3-Game2",
        "User-4-Game2",
        "User-5-Game2",
        "User-6-Game2",
        "User-7-Game2",
        "User-8-Game2",
      ],
    },
    {
      game: "game-3",
      users: [
        "User-1-Game3",
        "User-2-Game3",
        "User-3-Game3",
        "User-4-Game3",
        "User-5-Game3",
        "User-6-Game3",
        "User-7-Game3",
        "User-8-Game3",
      ],
    },
    {
      game: "game-4",
      users: [
        "User-1-Game4",
        "User-2-Game4",
        "User-3-Game4",
        "User-4-Game4",
        "User-5-Game4",
        "User-6-Game4",
        "User-7-Game4",
        "User-8-Game4",
      ],
    },
    {
      game: "game-5",
      users: [
        "User-1-Game5",
        "User-2-Game5",
        "User-3-Game5",
        "User-4-Game5",
        "User-5-Game5",
        "User-6-Game5",
        "User-7-Game5",
        "User-8-Game5",
      ],
    },
  ];
  const [gameSelected, setGameSelected] = React.useState([]);
  const [name, setname] = React.useState({});
  const [hours, setHours] = React.useState("00:00 --");
  const [userCapture, setuserCapture] = React.useState("");
  const [hoursDisplay, sethoursDisplay] = React.useState("00");
  const [MinutesDisplay, setMinutesDisplay] = React.useState("00");

  //time
  var sufijo = " am";
  var currentTime = new Date();
  const showClock = () => {
    if (currentTime.getHours() > 12) {
      sethoursDisplay("0" + currentTime.getHours() - 12);
    } else if (currentTime.getHours() === 0) {
      sethoursDisplay("12");
    } else if (currentTime.getHours() < 10) {
      sethoursDisplay("0" + currentTime.getHours());
    }

    if (currentTime.getMinutes() < 10) {
      setMinutesDisplay("0" + currentTime.getMinutes());
    } else {
      setMinutesDisplay(currentTime.getMinutes());
    }

    if (hoursDisplay > 12) {
      sufijo = " pm";
    } else {
      sufijo = " am";
    }
    setHours(hoursDisplay + " : " + MinutesDisplay + " " + sufijo);
  };

  setTimeout(showClock, 1000);

  //
  function JoinUser(user) {
    setuserCapture(user);
    console.log(userCapture);
    setFrontuser(user);
    return;
  }
  const SearchAction = () => {
    for (let index = 0; index < db.length; index++) {
      if (db[index].game === name) {
        setGameSelected(db[index].users);
      }
    }
    return;
  };
  return (
    <>
      <div className="grid-container main">
        <section className="grid-item itemMain1">
          <div>
            <div className="circles">
              <div className="circle circle1"></div>
              <div className="circle circle2"></div>
              <div className="circle circle3"></div>
            </div>
            <span>
              start <br /> <span className="text-change">streaming</span> <br />
              games <br />
              differently
              <br className="space-text" />
            </span>
            <span className="text-small">
              gamor now has
              <button className="text-button"> stream party</button> plaform
            </span>
            <br />

            <NavLink to="/register">
              <button className="account2 account">
                <span className="text-account2 text-account">
                  Create account
                </span>
              </button>
            </NavLink>
            <button onClick={open_login}> Sign in</button>
          </div>
        </section>
        <section className="grid-item itemMain2">
          <div
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
            className="grid-container"
          >
            <span className="title-span fortnite">Fortnite New Season</span>
            <br />
            <button className="btn-join">
              {!frontuser ? "Join Live Stream" : frontuser}
            </button>
            <br />
            <span className="text-time title-span">
              <button className="add-icon">
                <FontAwesomeIcon icon={faUserPlus} size="lg" />
              </button>
              {hours}
            </span>
          </div>
        </section>
        <section className="grid-item itemMain3">
          <div>
            <span className="title-span span-3">
              <span className="tag-number">01.</span>Choose Platform
            </span>
            <br />
            <section className="grid-container">
              <div className="grid-item section-platform">
                <button className="btn-platform">Party</button>
                <button className="btn-platform">Matchs</button>
                <button className="btn-platform">Streams</button>
              </div>
            </section>
            <span className="title-span span-3">
              <span className="tag-number">02.</span>Searching Game
            </span>
            <br />
            <section>
              <div className="section-game grid-container">
                <div>
                  <input
                    type="search"
                    placeholder="input example: game-1 or game-2"
                    className="search-input"
                    onChange={(e) => setname(e.target.value)}
                  />
                  <button className="order-button">
                    <FontAwesomeIcon icon={faFilter} size="lg" />
                  </button>
                </div>
                <br />
                <div className="divider-section-search"></div>
                <div className="search-container">
                  {gameSelected.map((gameSelected, index) => (
                    <div
                      key={index}
                      className="grid-container"
                      style={{
                        marginTop: "3%",
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      <div className="grid-item part1">
                        <span className="order-user">{index}</span>
                        <span className="name-user">{gameSelected}</span>
                      </div>
                      <div className="grid-item part2">
                        <i className="avatar-user">A</i>
                        <i className="avatar-user B">B</i>
                      </div>
                      <div className="grid-item part3">
                        <button
                          className="userJoin-btn"
                          onClick={() => JoinUser(gameSelected)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="search-button" onClick={SearchAction}>
                  Search Now
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainBoard;
