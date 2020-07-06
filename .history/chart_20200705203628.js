function draw(pos, chart, type) {
  var el = document.getElementById(pos);
  console.log(chart);

  var canvas = document.createElement("canvas");
  canvas.className = "list-item";
  canvas.setAttribute("draggable", "true");
  canvas.setAttribute("data-chart", JSON.stringify(chart));

  canvas.id = type + chart.id+'-'+pos;
  el.appendChild(canvas);
  console.log(canvas);
  c = document.getElementById(type + chart.id+'-'+pos).getContext("2d");
  new Chart(c, {
    type: chart.type,
    data: {
      labels: chart.labels,
      datasets: [
        {
          data: chart.data,
          backgroundColor: chart.colors,
        },
      ],
    },
    options: {
      title: {
        Text: "Do you like doughnuts?",
        display: true,
      },
    },
  });
}

exports = draw;

// let myChart1 = document.getElementById("myChart").getContext('2d');
let chartWrapper = document.getElementById("chartList");
console.log(chartWrapper);

for (let chart in chartData) {
  console.log(chartWrapper);

  draw(chartWrapper.id, chartData[chart],'chatLib-');
}


// let labels3 = ['Running', 'Cycling', 'Sleeping', 'Designing', 'Drinking'];

// let myChart3 = document.getElementById("myChart3").getContext('2d');

// let chart3 = new Chart(myChart3, {
//     type: 'radar',
//     data: {
//         labels: labels3,
//         datasets: [
//             {
//                 label: 'champ 1',
//                 fill: true,
//                 backgroundColor: "rgba(179, 181, 198, 0,2)",
//                 borderColor: "rgba(179, 181, 198, 1)",
//                 pointBorderColor: "#fff",
//                 pointBackgroundColor: "rgba(179, 181, 198, 1)",
//                 data: [50, 12, 55, 7, 29]
//             },
//             {
//                 label: 'champ 2',
//                 fill: true,
//                 backgroundColor: "rgba(355, 99, 132, 0,2)",
//                 borderColor: "rgba(355, 99, 132, 1)",
//                 pointBorderColor: "#fff",
//                 pointBackgroundColor: "rgba(355, 99, 132, 1)",
//                 data: [33, 14, 58, 9, 99]
//             },
//         ]
//     },
//     options: {
//         title: {
//             Text: "Skills",
//             display: true
//         }
//     }
// });



// '#E099AC', '#A4BCD3', '#DCD9DA', '#A4BCD4', '#92B6CB'
// let labels4 = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];

// let myChart4 = document.getElementById("myChart4").getContext('2d');
// let chart4 = new Chart(myChart4, {
//     type: 'line',
//     data: {
//         labels: labels4,
//         datasets: [
//             {
//                 label: "My First dataset",
//                 fillColor: "rgba(220,220,220,0.2)",
//                 strokeColor: "#C45C4B",
//                 pointColor: "#C45C4B",
//                 pointStrokeColor: "#C45C4B",
//                 pointHighlightFill: "#C45C4Bss",
//                 pointHighlightStroke: "rgba(220,220,220,1)",
//                 data: [65, 59, 80, 81, 16, 55, 40]
//             },
//             {
//                 label: "My Second dataset",
//                 fillColor: "rgba(151,187,205,0.2)",
//                 strokeColor: "rgba(151,187,205,1)",
//                 pointColor: "#EA8971",
//                 pointStrokeColor: "#fff",
//                 pointHighlightFill: "#fff",
//                 pointHighlightStroke: "rgba(151,187,205,1)",
//                 data: [28, 48, 40, 19, 86, 27, 90]
//             }
//         ]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 stacked: true
//             }]
//         }
//     }
// });

