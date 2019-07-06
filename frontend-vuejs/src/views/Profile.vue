<template>
  <div class="page-content fade-in-up">
    <div class="page-heading">
      <div class="page-breadcrumb">
        <h1 class="page-title">Paramètres de compte et de profil</h1>
      </div>
    </div>
    <!-- BEGIN: Page content-->
    <div>
      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body text-center">
              <span class="position-relative d-inline-block my-4">
                <img
                  class="rounded-circle"
                  src="https://picsum.photos/100/100"
                  alt="image"
                  width="120"
                />
                <span
                  class="badge-point badge-success avatar-badge"
                  style="bottom: 5px;right: 14px;height: 14px;width: 14px;"
                ></span>
              </span>
              <div class="h4">{{ this.$store.state.auth.user.username }}</div>
              <div class="text-muted mb-4">-</div>
              <p class="text-muted">{{ this.$store.state.auth.user.about }}</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-4">
                <h5 class="box-title mb-0">Information</h5>
                <a href="#">
                  <i class="ti-pencil"></i> Edit
                </a>
              </div>
              <div class="row mb-2">
                <div class="col-6 text-muted">First Name:</div>
                <div class="col-6">Johnatan</div>
              </div>
              <div class="row mb-2">
                <div class="col-6 text-muted">Last Name:</div>
                <div class="col-6">Due</div>
              </div>
              <div class="row mb-2">
                <div class="col-6 text-muted">Age:</div>
                <div class="col-6">26</div>
              </div>
              <div class="row mb-2">
                <div class="col-6 text-muted">Position:</div>
                <div class="col-6">Web Designer</div>
              </div>
              <div class="row mb-2">
                <div class="col-6 text-muted">City:</div>
                <div class="col-6">New York, USA</div>
              </div>
              <div class="row mb-2">
                <div class="col-6 text-muted">Address:</div>
                <div class="col-6">228 Park Ave Str.</div>
              </div>
              <div class="row mb-2">
                <div class="col-6 text-muted">Phone:</div>
                <div class="col-6">+1-202-555-0134</div>
              </div>
              <div class="row mb-2">
                <div class="col-6 text-muted">Email:</div>
                <div class="col-6">johndue@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-4">
                <div>
                  <h5 class="mb-2">Daily Feeds</h5>
                  <div class="text-muted font-13">From 14.12 - 21.12</div>
                </div>
                <a class="text-muted" href="#">
                  <i class="ti-more-alt"></i>
                </a>
              </div>
              <div class="card-fullwidth-block p-4 mb-4 flexbox" style="background-color: #e9ecef;">
                <div class="font-18">You have 14 new feeds</div>
                <a class="d-inline-flex align-items-center text-danger" href="#">
                  <span class="mr-2">View More</span>
                  <i class="fas fa-angle-right font-16"></i>
                </a>
              </div>
              <ul class="list-unstyled media-list-divider">
                <li class="media py-3">
                  <div class="mr-3 position-relative">
                    <img
                      class="rounded-circle align-self-center"
                      src="https://picsum.photos/100/100"
                      alt="image"
                      width="40"
                    />
                    <span class="badge-point badge-warning avatar-badge"></span>
                  </div>
                  <div class="media-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <strong>John Due</strong> liked on post
                        <strong>Article Name</strong>
                      </div>
                      <div class="text-muted font-13 ml-3" style="min-width: 80px;">2 days ago</div>
                    </div>
                  </div>
                </li>
                <li class="media py-3">
                  <div class="mr-3 position-relative">
                    <img
                      class="rounded-circle align-self-center"
                      src="https://picsum.photos/100/100"
                      alt="image"
                      width="40"
                    />
                    <span class="badge-point badge-warning avatar-badge"></span>
                  </div>
                  <div class="media-body">
                    <div class="d-flex justify-content-between mb-3">
                      <div>
                        <strong>John Due</strong> commented on
                        <strong>Article Name</strong>
                      </div>
                      <div class="text-muted font-13 ml-3" style="min-width: 80px;">2 days ago</div>
                    </div>
                    <div
                      class="p-3 rounded"
                      style="background-color: #e9ecef;"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</div>
                  </div>
                </li>
                <li class="media py-3">
                  <div class="mr-3 position-relative">
                    <img
                      class="rounded-circle align-self-center"
                      src="https://picsum.photos/100/100"
                      alt="image"
                      width="40"
                    />
                    <span class="badge-point badge-success avatar-badge"></span>
                  </div>
                  <div class="media-body">
                    <div class="d-flex justify-content-between mb-2">
                      <div>
                        <strong>John Due</strong> started following
                        <strong>Eliza Francine</strong>
                      </div>
                      <div class="text-muted font-13 ml-3" style="min-width: 80px;">2 days ago</div>
                    </div>
                    <p
                      class="text-muted"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </li>
                <li class="media py-3">
                  <div class="mr-3 position-relative">
                    <img
                      class="rounded-circle align-self-center"
                      src="https://picsum.photos/100/100"
                      alt="image"
                      width="40"
                    />
                    <span class="badge-point badge-warning avatar-badge"></span>
                  </div>
                  <div class="media-body">
                    <div class="d-flex justify-content-between mb-2">
                      <div>
                        <strong>John Due</strong> add new review on
                        <strong>Product</strong>
                      </div>
                      <div class="text-muted font-13 ml-3" style="min-width: 80px;">2 days ago</div>
                    </div>
                    <div class="mb-2">
                      <span>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half text-warning"></i>
                      </span>
                      <span class="text-muted ml-2">for</span>
                      <strong class="font-weight-bold">design quality</strong>
                    </div>
                    <p
                      class="text-muted"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </li>
                <li class="media py-3">
                  <div class="mr-3 position-relative">
                    <img
                      class="rounded-circle align-self-center"
                      src="https://picsum.photos/100/100"
                      alt="image"
                      width="40"
                    />
                    <span class="badge-point badge-success avatar-badge"></span>
                  </div>
                  <div class="media-body">
                    <div class="d-flex justify-content-between mb-2">
                      <div>
                        <strong>John Due</strong> started following
                        <strong>Eliza Francine</strong>
                      </div>
                      <div class="text-muted font-13 ml-3" style="min-width: 80px;">2 days ago</div>
                    </div>
                    <p
                      class="text-muted"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    <div>
                      <a class="btn btn-primary btn-rounded btn-sm mr-2" href="#">View</a>
                      <a class="btn btn-outline-secondary btn-rounded btn-sm" href="#">Follow</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="media-body">
                <div class="d-flex justify-content-between">
                  <strong class="text-danger mt-2">Supprimer votre compte</strong>
                  <div class="text-muted font-13 ml-3" style="min-width: 80px;">
                    <button
                      class="btn btn-danger btn-rounded"
                      @click="onDeleteUser"
                      type="button"
                    >Supprimer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onDeleteUser() {
      this.$awn.confirm(
        "Voulez-vous supprimer votre compte Expensa.",
        this.onClickOK,
        this.onClickCancel,
        {
          labels: {
            confirm: "Êtes vous sûrs ?"
          }
        }
      );
    },
    onClickOK() {
      this.$store
        .dispatch("profile/deleteUser", this.$store.state.auth.user.user_id)
        .then(response => {
          this.$awn.success(response.message, {
            icons: { success: "check" }
          });
          this.$store.dispatch("auth/logout");
          this.$router.push("authentication");
        });
    },
    onClickCancel() {
      return false;
    }
  }
};
</script>

