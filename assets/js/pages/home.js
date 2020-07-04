
$(document).ready(() => {
/********** column chart ********/
var options = {
    chart: {
      height: 300,
      type: 'bar',
      toolbar: {
        show: false,
      },
      foreColor: '#adb5bd'
    },
    plotOptions: {
      bar: {
        columnWidth: '10%'
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [
    {
        name: 'Atrasado',
        data: arrayElementsAtrasado
    },
    {
        name: 'Cuidado',
        data: arrayElementsCuidado
    },
    {
        name: 'Ainda tem Tempo',
        data: arrayElementsAindaTemTempo
    },
    {
        name: 'Concluido',
        data: arrayElementsConcluido
    }],
    grid: {
      yaxis: {
        lines: {
          show: true,
        }
      }
    },
    xaxis: {
      labels: {
        rotate: -90
      },
      categories: arrayElementsDependentes,
      title: {
        text: 'Responsável',
      }
    },
    colors: ['#e74c5e', '#FFF83C','#24E1DA', '#00FF54'],
}
  
var chart = new ApexCharts(
    document.querySelector("#column-chart"),
    options
);

chart.render();
  
/*********** multiple-radial-chart ************/

var options = {
    chart: {
        height: 325,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            offsetY: 10,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '50%',
                background: 'transparent',
                image: undefined,
            },
            
            dataLabels: {
                name: {
                    show: false,
                    
                },
                value: {
                    show: false,
                }
            }
        }
    },
    colors: ['#4090cb', '#06c2de', '#eb6776'],
    series: [76,67,61],
    stroke: {
      lineCap: 'round'
    },
    labels: ['Facebook', 'Twitter', 'Instagram'],
    legend: {
        show: true,
        floating: true,
        fontSize: '12px',
        position: 'left',
        offsetX: -30,
        offsetY: 10,
        labels: {
            useSeriesColors: true,
        },
        markers: {
            size: 0
        },
        formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
            horizontal: 3,
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: false
            }
        }
    }]
  }
  
  var chart = new ApexCharts(
    document.querySelector("#multiple-radial-chart"),
    options
  );
  
  chart.render();

  
})


