// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example for Money Manager
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Rent", "Groceries", "Entertainment", "Utilities", "Savings"],
    datasets: [{
      data: [40, 20, 15, 10, 15], // Example percentage distribution
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'], // Different colors for each category
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#d4a01d', '#c0392b'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: true,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.labels[tooltipItem.index] || '';
          var value = data.datasets[0].data[tooltipItem.index] || '';
          return label + ': ' + value + '%';
        }
      }
    },
    legend: {
      display: true, // Display the legend for better understanding
      position: 'bottom'
    },
    cutoutPercentage: 70, // Adjust for better visual representation
  },
});
