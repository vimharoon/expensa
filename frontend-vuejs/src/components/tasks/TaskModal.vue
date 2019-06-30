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
            <h5 class="modal-title" id="tasksModalCenter">{{ taskModalTitle }}</h5>
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
                    <input
                      class="md-form-control"
                      v-model="taskName"
                      type="text"
                      name="titre"
                      v-validate="'required|min:5|max:255'"
                    />
                    <label>Titre</label>
                    <span
                      v-show="errors.has('titre')"
                      class="helper-text"
                      :data-error="errors.first('titre')"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="md-form">
                <textarea
                  class="md-form-control"
                  name="description"
                  v-validate="'required|min:5|max:255'"
                  v-model="taskDescription"
                ></textarea>
                <label>Description</label>
                <span
                  v-show="errors.has('description')"
                  class="helper-text"
                  :data-error="errors.first('description')"
                ></span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-light" type="button" data-dismiss="modal">Annuler</button>
            <button class="btn btn-primary" @click="onSaveTask" type="button">Sauvegarder</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/eventBus";

export default {
  props: {
    taskModalTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      taskId: "",
      taskName: "",
      taskDescription: "",
      createTask: false
    };
  },
  mounted() {
    EventBus.$on("create-task", create => {
      this.taskName = "";
      this.taskDescription = "";
      this.createTask = create;
    });
    EventBus.$on("edit-task", task => {
      this.taskId = task.task_id;
      this.taskName = task.task_name;
      this.taskDescription = task.task_description;
      this.createTask = false;
    });
  },
  methods: {
    onSaveTask() {
      const taskData = {
        taskName: this.taskName,
        taskDescription: this.taskDescription
      };
      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.createTask) {
            this._createTask(taskData);
          } else {
            this._editTask(taskData);
          }
        } else {
          this.$awn.warning("Veuillez saisir des informations valides", {
            icons: { warning: "exclamation" }
          });
        }
      });
    },
    _createTask(taskData) {
      this.$store.dispatch("tasks/createNewTask", taskData).then(response => {
        this.$store.dispatch("tasks/getAllTasks");
        $("#tasksModalCenter").modal("hide");
        this.$awn.success(response.message, {
          icons: { success: "check" }
        });
      });
    },
    _editTask(taskData) {
      const editTaskData = {
        taskData: taskData,
        id: this.taskId
      };
      this.$store.dispatch("tasks/updateTask", editTaskData).then(response => {
        this.$store.dispatch("tasks/getAllTasks");
        $("#tasksModalCenter").modal("hide");
        this.$awn.success(response.message, {
          icons: { success: "check" }
        });
      });
    }
  }
};
</script>

