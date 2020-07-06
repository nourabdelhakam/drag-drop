let labels1 = ['YES', 'NO', 'SOMTIMES'];
let data1 = [50, 20, 30];
let colors1 = ['#49A9EA', '#36CAAB', '#36A2EB']

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