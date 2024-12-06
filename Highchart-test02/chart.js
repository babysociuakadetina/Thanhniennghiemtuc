 // Sample data: hourly temperatures for a day
 const data = [
  [Date.UTC(2024, 11, 6, 0), 22], // Midnight
  [Date.UTC(2024, 11, 6, 1), 21],
  [Date.UTC(2024, 11, 6, 2), 20],
  [Date.UTC(2024, 11, 6, 3), 19],
  [Date.UTC(2024, 11, 6, 4), 18],
  [Date.UTC(2024, 11, 6, 5), 18],
  [Date.UTC(2024, 11, 6, 6), 19],
  [Date.UTC(2024, 11, 6, 7), 21],
  [Date.UTC(2024, 11, 6, 8), 24],
  [Date.UTC(2024, 11, 6, 9), 27],
  [Date.UTC(2024, 11, 6, 10), 30],
  [Date.UTC(2024, 11, 6, 11), 32],
  [Date.UTC(2024, 11, 6, 12), 33],
  [Date.UTC(2024, 11, 6, 13), 32],
  [Date.UTC(2024, 11, 6, 14), 31],
  [Date.UTC(2024, 11, 6, 15), 29],
  [Date.UTC(2024, 11, 6, 16), 27],
  [Date.UTC(2024, 11, 6, 17), 25],
  [Date.UTC(2024, 11, 6, 18), 24],
  [Date.UTC(2024, 11, 6, 19), 23],
  [Date.UTC(2024, 11, 6, 20), 22],
  [Date.UTC(2024, 11, 6, 21), 21],
  [Date.UTC(2024, 11, 6, 22), 20],
  [Date.UTC(2024, 11, 6, 23), 19] // 11 PM
];

// Current time (UTC timestamp)
const today = Date.now();

// Highcharts configuration
Highcharts.chart('container', {
  title: {
    text: 'Gold Forecast Price in Vietnam',
    align: 'left'
  },

  subtitle: {
    text: 'Dotted line typically signifies prognosis',
    align: 'left'
  },

  xAxis: {
    type: 'datetime',
    plotLines: [{
      color: '#4840d6',
      width: 2,
      value: today,
      zIndex: 2,
      dashStyle: 'Dash',
      label: {
        text: 'Current time',
        rotation: 0,
        y: 20,
        style: {
          color: '#333333'
        }
      }
    }]
  },

  yAxis: {
    title: {
      text: 'Price'
    }
  },

  legend: {
    enabled: false
  },

  tooltip: {
    valueSuffix: '$$',
    xDateFormat: '%H:%M'
  },

  series: [{
    name: 'Price in Vietnam',
    data: data,
    zoneAxis: 'x',
    lineWidth: 4,
    marker: {
      lineWidth: 2,
      lineColor: '#4840d6',
      fillColor: '#fff'
    },
    color: {
      linearGradient: { x1: 1, x2: 2, y1: 3, y2: 2 },
      stops: [
        [0, '#fa4fed'],
        [1, '#5897ff']
      ]
    },
    zones: [{
      value: today
    }, {
      dashStyle: 'Dot'
    }]
  }]
});