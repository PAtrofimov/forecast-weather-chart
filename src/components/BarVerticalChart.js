import React from "react";
import PropTypes from "prop-types";
import { Bar, BarChart } from "recharts";

const BarVerticalChart = ({ data }) => {
  if (!data || data.length == 0) {
    return null;
  }

  return (
    <BarChart width={700} height={200} data={data}>
      <Bar dataKey="temp" fill="#8884d8" />
    </BarChart>
  );
};

BarVerticalChart.propTypes = {
  data: PropTypes.array,
};

BarVerticalChart.defaultProps = {
  data: [],
};

export default BarVerticalChart;
