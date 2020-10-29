import { Component } from "react";
import "./App.css";
import defaultQuote from "./defaultQuote";
import axios from "axios";
import QuoteCard from "./Components/QuoteCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: defaultQuote,
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  fetchQuote() {
    this.setState({ loading: true }, () => {
      axios
        .get("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then((response) => response.data)

        .then((data) => {
          this.setState({
            quote: data[0],
            loading: false,
          });
        });
    });
  }

  render() {
    const { loading } = this.state;
    // const spinnerLoader = URL("https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif");
    return (
      <div id="randomCard">
        {loading ? (
          <div id="isLoad">
            <img id="gifLoading"
              src="https://media.giphy.com/media/PkoBC2GlkLJ5yFIWtf/giphy.gif"
              alt="spinner loader"
            />
            <span>Loading...</span>
          </div>
        ) : (
          <QuoteCard id="card" quote={this.state.quote} />
        )}
        <button id="btnQuote" onClick={this.fetchQuote}>
          Change quote
        </button>
      </div>
    );
  }
}

export default App;
