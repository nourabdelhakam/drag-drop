
let data1 = [70, 30];
let colors1 = ['#C45C4B', '#7B4D6A']
let labels1 = ['YES', 'NO'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [ {
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            Text: "Do you like doughnuts?",
            display: true,

        }
    }
});

let labels2 = ['jul 1', 'jul 2', 'jul 3', 'jul 4', 'jul 5'];
let data2 = [170, 60.5, 130, 126.3, 90];
let colors2 = ['#E099AC', '#A4BCD3', '#DCD9DA', '#A4BCD4', '#92B6CB']

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2,
            
        }]
    },
    options: {
        title: {
            Text: "Do you like doughnuts?",
            display: true
        },
        legend: {
            display: false
        }
    }
});

let labels3 = ['Running', 'Cycling', 'Sleeping', 'Designing', 'Drinking'];

let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [
            {
                label: 'champ 1',
                fill: true,
                backgroundColor: "rgba(179, 181, 198, 0,2)",
                borderColor: "rgba(179, 181, 198, 1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(179, 181, 198, 1)",
                data: [50, 12, 55, 7, 29]
            },
            {
                label: 'champ 2',
                fill: true,
                backgroundColor: "rgba(355, 99, 132, 0,2)",
                borderColor: "rgba(355, 99, 132, 1)",
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(355, 99, 132, 1)",
                data: [33, 14, 58, 9, 99]
            },
        ]
    },
    options: {
        title: {
            Text: "Skills",
            display: true
        }
    }
});

// let labels4 = ['Germany', 'France', 'UK', 'Italy', 'spain', 'others(23)'];
// let data4 = [50, 20, 30, 83, 77, 88];
// let colors4 = ['#F59F3A', '#E74C9A', '#C22BA7', '#05C4ED', '#7e4a35', '#dbceb0']

// let myChart4 = document.getElementById("myChart4").getContext('2d');

// let chart4 = new Chart(myChart4, {
//     type: 'pie',
//     data: {
//         labels: labels4,
//         datasets: [ {
//             data: data4,
//             backgroundColor: colors4,
//         }]
//     },
//     options: {
//         title: {
//             Text: "Population of the European Union",
//             display: true
//         }
//     }
// });

'#E099AC', '#A4BCD3', '#DCD9DA', '#A4BCD4', '#92B6CB'
let labels4 = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];

let myChart4 = document.getElementById("myChart4").getContext('2d');
let chart4 = new Chart(myChart4, {
    type: 'line',
    data: {
        labels: labels4,
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "#C45C4B",
                pointColor: "#C45C4B",
                pointStrokeColor: "#C45C4B",
                pointHighlightFill: "#C45C4Bss",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 16, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "#EA8971",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
});
let myChart5 = document.getElementById("myChart5").getContext('2d');
let chart5 = new Chart(myChart5,
 {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            // this dataset is drawn below
            order: 1
        }, {
            label: 'Line Dataset',
            data: [10, 10, 10, 10],
            type: 'line',
            // this dataset is drawn on top
            order: 2
        }],
        labels: ['January', 'February', 'March', 'April']
    },
   
});