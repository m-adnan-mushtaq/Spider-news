import Chart from 'react-apexcharts'

import React from 'react'

export default function CovidStats(props) {
      const config = {
        series: [props.totalConfirmed, props.TotalDeaths, props.NewDeaths, props.TotalRecovered, props.NewRecovered],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          theme: {
            palette: 'palette3' // upto palette10
          },
          labels: ['Total Confirmed', 'Total Deaths', 'New Deaths', 'Total Recoverd', 'New Recovered'],
        
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    

      return (
        <Chart options={config.options} series={config.series} type="pie" width={500} height={320} />
      )
}
