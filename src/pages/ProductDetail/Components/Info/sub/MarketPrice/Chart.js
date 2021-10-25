import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const Chart = ({ graphData }) => {
  const DATA = {
    data: {
      datasets: [
        {
          data: graphData,
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

  return (
    <Wrapper>
      <Line data={DATA.data} options={DATA.options} width="inherit" />
    </Wrapper>
  );
};

export default Chart;

const Wrapper = styled.div`
  padding: 20px 0 15px;
`;
