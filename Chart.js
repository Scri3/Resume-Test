window.onload = function() {
    var ctx = document.getElementById('skillsChart').getContext('2d');
    var skillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Python', 'Java', 'C++ & Qt Creator', 'C#', 'SQL', 'HTML / CSS', 'Adobe Premiere Pro', 'Camtasia'],
            datasets: [{
                label: 'درصد مهارت',
                data: [42, 25, 20, 40, 60, 50, 65, 78],
                backgroundColor: 'rgba(0, 255, 127, 0.8)',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 3
            }]
        },
        options: {
            indexAxis: 'y',
            animation: {
                duration: 2000,
                easing: 'easeInOutBounce'
            },
            scales: {
                x: {
                    min: 0,
                    max: 100,
                    
                    ticks: {
                        stepSize: 25,
                        color: 'rgba(0, 0, 0, 1)', // Color of the numbers on the x-axis
                        font: {
                            size: 18, // Font size of the numbers on the x-axis
                            family: 'Arial', // Font family of the numbers on the x-axis
                            weight: 'bold' // Font weight of the numbers on the x-axis
                        }
                        
                    },
                    grid: {
                        display: true, // Removes the grid lines on the x-axis
                        lineWidth: 4,
                        color: 'rgba(0, 0, 255, 1)'
                    }
                },
                y: {
                    ticks: {
                        
                        color: 'rgba(0, 0, 0, 1)', // Color of the labels on the y-axis
                        font: {
                            size: 18, // Font size of the labels on the y-axis
                            family: 'Arial', // Font family of the labels on the y-axis
                            weight: 'bold' // Font weight of the labels on the y-axis
                        }
                    },
                    grid: {
                        display: false // Removes the grid lines on the y-axis
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
};
