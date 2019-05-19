<template>
  <div id="dashbord-page" class="page-content fade-in-up">
    <div class="page-heading">
      <div class="page-breadcrumb">
        <h1 class="page-title">L'état de votre portefeuille</h1>
      </div>
    </div>
    <div>
      <!-- deb0 -->
      <div class="row">
        <div class="col-xs-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 card-container">
          <div class="card">
            <div class="card-body">
              <h6 class="mb-3 font-15 text-muted font-weight-normal">REVENUES</h6>
              <div class="h2 mb-0 font-weight-normal">4000 €</div>
              <i class="la la-arrow-up top-widget-icon text-success"></i>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 card-container">
          <div class="card">
            <div class="card-body">
              <h6 class="mb-3 font-15 text-muted font-weight-normal">DEPENSES</h6>
              <div class="h2 mb-0 font-weight-normal">7450 €</div>
              <i class="la la-arrow-down top-widget-icon text-danger"></i>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 card-container">
          <div class="card">
            <div class="card-body">
              <h6 class="mb-3 font-15 text-muted font-weight-normal">SOLDE</h6>
              <div class="h2 mb-0 font-weight-normal">740 €</div>
              <i class="la la-money top-widget-icon text-primary"></i>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 card-container">
          <div class="card">
            <div class="card-body">
              <h6 class="mb-3 font-15 text-muted font-weight-normal">TRANSACTIONS</h6>
              <div class="h2 mb-0 font-weight-normal">45</div>
              <i class="la la-exchange top-widget-icon text-muted"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- deb1 -->
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-4">
                <h5 class="box-title">Dépenses totales</h5>
                <input
                  class="form-control w-25"
                  type="date"
                  value="2011-08-19"
                  id="example-date-input"
                >
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <canvas id="pie_chart_1" style="height: 160px"></canvas>
                </div>
                <div class="col-sm-4">
                  <div class="mt-4">
                    <div class="flexbox mb-3">
                      <div>
                        <span class="badge-point badge-primary rounded-0 mr-2"></span>
                        <span>In-Store Sales</span>
                      </div>
                      <span class="h6 mb-0 font-16">$25976</span>
                    </div>
                    <div class="flexbox mb-3">
                      <div>
                        <span class="badge-point badge-info rounded-0 mr-2"></span>
                        <span>Online Sales</span>
                      </div>
                      <span class="h6 mb-0 font-16">$6494</span>
                    </div>
                    <div class="flexbox mb-2">
                      <div>
                        <span class="badge-point badge-danger rounded-0 mr-2"></span>
                        <span>Sales Rate</span>
                      </div>
                      <span class="h6 mb-0 font-16">+12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- deb2 -->
      <div class="row">
        <div class="col-lg-6">
          <div class="card card-fullheight">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-5">
                <div>
                  <h5 class="box-title mb-2">Sales</h5>
                  <div class="text-muted font-13">Simple Subtitle</div>
                </div>
                <ul class="nav nav-pills nav-pills-links d-none d-sm-flex">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#tab-1">Weekly</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#tab-2">Monthly</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#tab-3">Yearly</a>
                  </li>
                </ul>
              </div>
              <div id="bar_chart"></div>
              <div class="flexbox flex-wrap mt-5">
                <div class="d-flex mb-4 mb-sm-0">
                  <div class="pr-4 pr-sm-5">
                    <h6 class="mb-2 font-15 text-muted">Total Orders</h6>
                    <div class="h4 mb-0 text-primary">+24.50%</div>
                  </div>
                  <div class="pl-0 pl-sm-5">
                    <h6 class="mb-2 font-15 text-muted">Total Income</h6>
                    <div class="h4 mb-0 text-danger">+$625.50</div>
                  </div>
                </div>
                <button class="btn btn-primary">Print Data</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card card-fullheight">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-5">
                <div>
                  <h5 class="box-title mb-2">Visitors Analytics</h5>
                  <div class="text-muted font-13">Simple Subtitle</div>
                </div>
                <ul class="nav nav-pills nav-pills-links d-none d-sm-flex">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#pill-1">Weekly</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#pill-2">Monthly</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#pill-3">Yearly</a>
                  </li>
                </ul>
              </div>
              <div id="line_chart_1"></div>
              <div class="flexbox flex-wrap mt-5">
                <div class="d-flex mb-4 mb-sm-0">
                  <div class="pr-4 pr-sm-5">
                    <h6 class="mb-2 font-15 text-muted">New Users</h6>
                    <div class="h4 mb-0 text-primary">+358</div>
                  </div>
                  <div class="pl-0 pl-sm-5">
                    <h6 class="mb-2 font-15 text-muted">Total Sales</h6>
                    <div class="h4 mb-0 text-danger">+$12.050</div>
                  </div>
                </div>
                <button class="btn btn-primary">Print Data</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- deb3 -->
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-fullheight">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-4">
                <h5 class="box-title mb-0">Recent Transactions</h5>
                <a class="text-muted" href="#">View All</a>
              </div>
              <table class="table table-borderless cols-align-middle">
                <tbody>
                  <tr>
                    <td class="text-center text-muted font-weight-strong">
                      <div>DEC 12</div>
                    </td>
                    <td>
                      <i class="la la-arrow-up text-success"></i>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">From John Due</div>
                      <div class="text-muted">cash</div>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">sdfd fdsf fsd</div>
                    </td>
                    <td class="text-right">
                      <div class="h6 mb-1 font-16 text-success">+ 2100.45 USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center text-muted font-weight-strong">
                      <div>DEC 12</div>
                    </td>
                    <td>
                      <i class="la la-arrow-up text-success"></i>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">From John Due</div>
                      <div class="text-muted">cash</div>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">sdfd fdsf fsd</div>
                    </td>
                    <td class="text-right">
                      <div class="h6 mb-1 font-16 text-success">+ 3400.50 USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center text-muted font-weight-strong">
                      <div>DEC 12</div>
                    </td>
                    <td>
                      <i class="la la-arrow-down text-warning"></i>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">To John Due</div>
                      <div class="text-muted">cash</div>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">sdfd fdsf fsd</div>
                    </td>
                    <td class="text-right">
                      <div class="h6 mb-1 font-16 text-danger">- 1250.50 USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center text-muted font-weight-strong">
                      <div>DEC 12</div>
                    </td>
                    <td>
                      <i class="la la-arrow-down text-warning"></i>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">To John Due</div>
                      <div class="text-muted">cash</div>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">sdfd fdsf fsd</div>
                    </td>
                    <td class="text-right">
                      <div class="h6 mb-1 font-16 text-danger">- 1250.50 USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center text-muted font-weight-strong">
                      <div>DEC 12</div>
                    </td>
                    <td>
                      <i class="la la-arrow-down text-success"></i>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">From John Due</div>
                      <div class="text-muted">cb</div>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">sdfd fdsf fsd</div>
                    </td>
                    <td class="text-right">
                      <div class="h6 mb-1 font-16 text-success">+ 3400.50 USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center text-muted font-weight-strong">
                      <div>DEC 12</div>
                    </td>
                    <td>
                      <i class="la la-arrow-down text-warning"></i>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">To John Due</div>
                      <div class="text-muted">cash</div>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">sdfd fdsf fsd</div>
                    </td>
                    <td class="text-right">
                      <div class="h6 mb-1 font-16 text-danger">- 1250.50 USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center text-muted font-weight-strong">
                      <div>DEC 12</div>
                    </td>
                    <td>
                      <i class="la la-arrow-up text-success"></i>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">From John Due</div>
                      <div class="text-muted">cash</div>
                    </td>
                    <td>
                      <div class="h6 mb-1 font-16">sdfd fdsf fsd</div>
                    </td>
                    <td class="text-right">
                      <div class="h6 mb-1 font-16 text-success">+ 3400.50 USD</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- fin3 -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#dashbord-page {
  height: 100%;
  .top-widget-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 40px;
    color: #6a89d7;
  }
}
</style>
