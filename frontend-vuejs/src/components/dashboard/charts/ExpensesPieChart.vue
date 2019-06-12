<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-4">
            <h5 class="box-title">Dépenses totales</h5>
          </div>
          <apexchart
            type="pie"
            height="350"
            width="100%"
            :options="pieOptions"
            :series="pieSeries"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pieSeries: [44, 55, 13, 43, 22],
      pieOptions: {
        labels: [
          "Nourriture - 6,000 €",
          "Loyer - 4,866 €",
          "Divertissement - 4,160 €",
          "Crédit - 4,844€",
          "Transports - 2,480 €"
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }
};
</script>

