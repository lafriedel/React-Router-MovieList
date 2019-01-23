import React from 'react';

class MovieCard extends React.Component {

  render() {
    return (
      <div className="movie-card">
      <h2>{this.props.title}</h2>
      <div className="movie-director">
        Director: <em>{this.props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{this.props.metascore}</strong>
      </div>
      <h3>Actors</h3>
  
      {this.props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    );
  }

};

export default MovieCard;
