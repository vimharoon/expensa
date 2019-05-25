<template>
  <div class="col-lg-6">
    <div class="card card-fullheight">
      <div class="card-body">
        <div class="mb-5">
          <div>
            <h5 class="box-title mb-2">Compte - Solde</h5>
          </div>
        </div>
        <apexchart type="line" height="350" width="100%" :options="chartOptions" :series="series"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Solde",
          data: [34, 43, 31, 63, 45, 75, 50, 77]
        }
      ],
      chartOptions: {
        xaxis: {
          categories: [
            "Jan 2019",
            "Fév 2019",
            "Mar 2019",
            "Avr 2019",
            "Mai 2019",
            "Jui 2019",
            "Jui 2019",
            "Aoû 2019"
          ]
        },
        dataLabels: {
          enabled: true,
          offsetY: -3
        },
        colors: [theme_color("purple"), theme_color("pink")],
        stroke: {
          curve: "smooth",
          width: 3
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: [theme_color("pink")],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
          }
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "€ " + val + " euros";
            }
          }
        }
      }
    };
  }
};
</script>
