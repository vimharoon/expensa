<template>
  <div class="col-lg-6">
    <div class="card card-fullheight">
      <div class="card-body">
        <div class="mb-5">
          <div>
            <h5 class="box-title mb-2">Revenus - Dépenses</h5>
          </div>
        </div>
        <apexchart type="bar" height="350" width="100%" :options="barOptions" :series="barSeries"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barSeries: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }
      ],
      barOptions: {
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: "rounded",
            columnWidth: "55%"
          }
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"]
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: "top"
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct"
          ]
        },
        yaxis: {
          title: {
            text: "$ (thousands)"
          }
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        }
      }
    };
  }
};
</script>

