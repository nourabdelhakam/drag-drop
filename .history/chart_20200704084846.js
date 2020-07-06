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
            backgroundColor: colors2
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