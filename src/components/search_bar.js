import React, {Component} from 'react';



class SearchBar extends Component {
  onInputChange (term) {
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder ="search"
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
