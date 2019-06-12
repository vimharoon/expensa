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
                    <input class="md-form-control" type="text">
                    <label>Titre</label>
                  </div>
                </div>
              </div>
              <div class="md-form">
                <textarea class="md-form-control"></textarea>
                <label>description</label>
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
    <div
      class="modal fade"
      id="exampleModalPopovers"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalPopoversLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalPopoversLabel">Modal title</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <h5>Popover in a modal</h5>
            <p>
              This
              <a
                class="btn btn-secondary"
                href="#"
                role="button"
                data-toggle="popover"
                title="Popover title"
                data-content="Popover body content is set in this attribute."
              >button</a> triggers a popover on click.
            </p>
            <hr>
            <h5>Tooltips in a modal</h5>
            <p>
              <a href="#" data-toggle="tooltip" title="Tooltip">This link</a> and
              <a href="#" data-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.
            </p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-light" type="button" data-dismiss="modal">Close</button>
            <button class="btn btn-primary" type="button">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
