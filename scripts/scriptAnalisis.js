let chart;
let startRange = -10;
let endRange = 10;

function drawGraph() {
  const expression = document.getElementById('functionInput').value;
  const parsedData = parseData(expression);
  
  if (chart) {
    chart.destroy();
  }

  const ctx = document.getElementById('chartCanvas').getContext('2d');
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: parsedData.labels,
      datasets: [{
        label: 'Función',
        data: parsedData.data,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
        tension: 0.1
      }]
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          min: startRange,
          max: endRange
        },
        y: {
          beginAtZero: false
        }
      }
    }
  });
}

function parseData(expression) {
    const modifiedExpression = expression.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan');
    const labels = [];
    const data = [];
  
    for (let x = startRange; x <= endRange; x += 0.1) {
      labels.push(x.toFixed(1));
      data.push(eval(modifiedExpression));
    }
  
    return { labels, data };
  }
  

function zoomIn() {
  const range = endRange - startRange;
  startRange += range * 0.2;
  endRange -= range * 0.2;
  drawGraph();
}

function zoomOut() {
  const range = endRange - startRange;
  startRange -= range * 0.2;
  endRange += range * 0.2;
  drawGraph();
}