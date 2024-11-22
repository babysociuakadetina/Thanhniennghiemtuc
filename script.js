document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('goldChart').getContext('2d');
  
  // Sample data
  const labels = [];
  const predictedData = [];
  const actualData = [];
  
  // Generate 3 months of data
  for (let i = 0; i < 90; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (90 - i));
      labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
      
      // Generate some random data with a trend
      const baseValue = 15000 + Math.sin(i/10) * 5000;
      predictedData.push(baseValue + Math.random() * 1000);
      actualData.push(baseValue + Math.random() * 800);
  }

  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(168, 85, 247, 0.4)');
  gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

  new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [
              {
                  label: 'Giá dự đoán',
                  data: predictedData,
                  borderColor: '#a855f7',
                  borderWidth: 2,
                  fill: true,
                  backgroundColor: gradient,
                  tension: 0.4,
                  pointRadius: 0,
              },
              {
                  label: 'Giá thực tế',
                  data: actualData,
                  borderColor: '#38bdf8',
                  borderWidth: 2,
                  tension: 0.4,
                  pointRadius: 0,
              }
          ]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: true,
                  position: 'bottom'
              }
          },
          scales: {
              y: {
                  grid: {
                      display: true,
                      color: '#f0f0f0'
                  }
              },
              x: {
                  grid: {
                      display: false
                  }
              }
          }
      }
  });
});