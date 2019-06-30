<template>
  <div>
    <div
      class="modal fade"
      id="tasksModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="tasksModalCenter"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="tasksModalCenter">Nouvelle Tâche</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group"></div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="md-form">
                    <input class="md-form-control" type="text" />
                    <label>Titre</label>
                  </div>
                </div>
              </div>
              <div class="md-form">
                <textarea class="md-form-control"></textarea>
                <label>Description</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-light" type="button" data-dismiss="modal">Annuler</button>
            <button class="btn btn-primary" type="button">Sauvegarder</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
