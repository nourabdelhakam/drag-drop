 chartData={
    chart1 : {
        id: 1,
        data : [70, 30],
        colors : ['#C45C4B', '#7B4D6A'],
        labels : ['YES', 'NO'],
        type : 'doughnut'
    },
    chart2 : {
        id: 2,
        labels : ['jul 1', 'jul 2', 'jul 3', 'jul 4', 'jul 5'],
        data : [170, 60.5, 130, 126.3, 90],
        colors : ['#E099AC', '#A4BCD3', '#DCD9DA', '#A4BCD4', '#92B6CB'],
        type: 'bar'
    },
    chart3 : {
        id: 3,
        labels : ['Germany', 'France', 'UK', 'Italy', 'spain', 'others(23)'],
        data : [50, 20, 30, 83, 77, 88],
        colors : ['#F59F3A', '#E74C9A', '#C22BA7', '#05C4ED', '#7e4a35', '#dbceb0'],
        type: 'pie'
    },
    chart4 : {
        id: 4,
        labels : ['Germany', 'France', 'UK', 'Italy', 'spain'],
        data : [50, 20, 30, 83, 77, 88],
        colors : ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#dbceb0"],
        type: 'pie'
    },
    chart5 : {
        id: 5,
        labels : ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
              label: "1950",
              fill: true,
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(179,181,198,1)",
              data: [8.77,55.61,21.69,6.62,6.82]
            }, {
              label: "2050",
              fill: true,
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              data: [25.48,54.16,7.61,8.06,4.45]
            }
          ],
        type: 'radar'
    }

}

exports = chartData