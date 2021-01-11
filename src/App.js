import React from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getForecast } from "./redux/forecast/forecastActions";
import BarVerticalChart from "./components/BarVerticalChart";
import CitySearch from "./components/CitySearch";

function App({ forecastData: {loading, data, error, search=""}, getForecast }) {
  const handleSearch = (city) => {
    getForecast(city);
  };

  return loading ? (
    <h2 className="loading">Loading</h2>
  ) : (
    <main className="forecast-app">
      <div className="forecast-search-panel">
        <CitySearch
          data={data}
          handleSearch={handleSearch}
          search={search}
        />
      </div>

      <div className="forecast-chart-panel">
        {error ? (
          <h2 className="error">{error}</h2>
        ) : (
          <BarVerticalChart data={data} />
        )}
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    forecastData: state.forecast,
  };
};

const actions = { getForecast };

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

App.propTypes = {
  forecastData: PropTypes.object,
  getForecast: PropTypes.func
};

App.defaultProps = {
  forecastData: [] 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
