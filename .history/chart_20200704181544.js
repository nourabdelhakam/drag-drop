let labels1 = ['YES', 'NO', 'SOMTIMES'];
let data1 = [50, 20, 30];
let colors1 = ['#C45C4B', '#7B4D6A', '#17343F']

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
            display: true
        }
    }
});

let labels2 = ['jul 1', 'jul 2', 'jul 3', 'jul 4', 'jul 5'];
let data2 = [199, 50.5, 130, 126.3, 70];
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

let labels4 = ['Germany', 'France', 'UK', 'Italy', 'spain', 'others(23)'];
let data4 = [50, 20, 30, 83, 77, 88];
let colors4 = ['#F59F3A', '#E74C9A', '#C22BA7', '#05C4ED', '#7e4a35', '#dbceb0']

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            Text: "Population of the European Union",
            display: true
        }
    }
});


let labels6 = ['jan', 'feb', 'mar', 'apr', 'may'];
let data6 = [199, 50.5, 130, 126.3, 70];
let myChart6 = document.getElementById("myChart6").getContext('2d');
let chart6 = new Chart(myChart6, {
    type: 'line',
    data: {
        labels: labels6,
        datasets: [ {
            data:data6,
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
});