import React from "react";
import "./detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie__detailinf">
          <img
            src={location.state.poster}
            title={location.state.title}
            alt={location.state.title}
          ></img>
          <p class="movie__detail__title">{location.state.title}</p>
          <p class="movie__detail__year">{location.state.year}</p>
          <p>
            {location.state.genres.map((genre) => (
              <span class="movie__detail__genres">{genre}</span>
            ))}
          </p>
          <p class="movie__detail__summary">{location.state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
