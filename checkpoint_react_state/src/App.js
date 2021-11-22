import "./App.css";
import React, { Component } from "react";
import img from "./assets/yass.png";

class App extends Component {
  state = {
    Person: {
      fullName: "Nour Yasmine Hanachi",
      bio: "i'm 23 years old girl, Living in Tunisia but Travel a lot ",
      imgSrc: { img },
      profession: "Photographer,Gamer",
    },
    show: false,
    count: 0,
    intervalId: 0,
  };
  //Function Time
  handleClick = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState((prevState) => {
        return {
          ...prevState,
          intervalId: 0,
          count: 0,
        };
      });
      return;
    }
    const newIntervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);

    this.setState((prevState) => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  };
  //function person
  handleShowPerson = () => {
    this.setState({
      ...this.state.Person,
      show: !this.state.show,
    });
  };
  /***/
  render() {
    return (
      <div
        style={{
          backgroundColor: "Black",
          width: "400px",
          padding: "50px",
          margin: "20px auto",
          borderRadius: "10px",
        }}
      >
        {this.state.show && (
          <div>
            <h1 style={{ color: "White", textAlign: "center" }}>
              {this.state.Person.fullName}
            </h1>
            <h2 style={{ color: "White", textAlign: "center" }}>
              {this.state.Person.bio}
            </h2>
            <img
              src={img}
              alt="my picture"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "200px",
              }}
            ></img>
            <h3 style={{ color: "white", textAlign: "center" }}>
              {this.state.Person.profession}
            </h3>
            <h3 style={{ textAlign: "center", color: "white" }}>
              Counting Cycle= <input type="text" value={this.state.count} />{" "}
              Secondes
            </h3>

            <br />
            <br />
          </div>
        )}
        <button
          style={{
            color: "black",
            backgroundColor: "Red",
            width: "150px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onClick={() => {
            this.handleShowPerson();
            this.handleClick();
          }}
          className="btn"
        >
          Show Person
        </button>
      </div>
    );
  }
}
export default App;
