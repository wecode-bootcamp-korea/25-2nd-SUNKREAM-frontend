import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const Chart = props => {
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

const DATA = {
  data: {
    datasets: [
      {
        data: [
          {
            id: 10,
            price: 20000,
            created_at: '2021-10-21',
          },
          {
            id: 10,
            price: 20000,
            created_at: '2021-10-22',
          },

          {
            id: 10,
            price: 45000,
            created_at: '2021-10-23',
          },
          {
            id: 10,
            price: 13400,
            created_at: '2021-10-23',
          },
          {
            id: 10,
            price: 20000,
            created_at: '2021-10-24',
          },
          {
            id: 10,
            price: 12000,
            created_at: '2021-10-24',
          },
          {
            id: 10,
            price: 20000,
            created_at: '2021-10-25',
          },
        ],
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
