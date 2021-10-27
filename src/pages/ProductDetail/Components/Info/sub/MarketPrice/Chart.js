import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const Chart = ({ graphData }) => {
  const sourceData = getGraphData(graphData);

  return (
    <Wrapper>
      <Line data={sourceData.data} options={sourceData.options} height="100%" />
    </Wrapper>
  );
};

export default Chart;

const Wrapper = styled.div`
  padding: 20px 0 15px;
`;

const getGraphData = data => {
  const result = {
    data: {
      datasets: [
        {
          data: data,
          backgroundColor: 'transparent',
          borderColor: '#eb472a',
          borderWidth: 1,
        },
      ],
    },

    options: {
      parsing: {
        xAxisKey: 'created_at',
        yAxisKey: 'price',
      },
      datasets: {
        line: {
          pointRadius: 0,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        yAxes: {
          display: true,
          position: 'right',
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        xAxes: {
          display: false,
        },
      },
    },
  };
  return result;
};
