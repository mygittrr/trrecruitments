
var xValues = ["UP", "Biha", "Kerla", "Tmail Nadu", "West Bengal"];
var yValues = [15000, 10000, 5000, 2000, 1000];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Top 5 states for Labour sending  2021-2022"
    }
  }
});
