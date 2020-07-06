function draw(pos, chart, type) {
  var el = document.getElementById(pos);
  console.log(chart);

  var canvas = document.createElement("canvas");
  canvas.className = "list-item";
  canvas.setAttribute("draggable", "true");
  canvas.setAttribute("data-chart", JSON.stringify(chart));

  canvas.id = type + chart.id+'-'+pos;
  if(type == 'chartLib'){
     var clear = document.createElement('btn');
     clear.innerHTML ='x';
     clear.className = 'clearChart';
     clear.id = 'clear-'+pos;
  }
  el.appendChild(canvas);
  canvas.style.height='100%'
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
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        margin: {
            right:0,
            left:0,
            top:0,
            bottom:0
        },
        
    }
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
