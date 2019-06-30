<template>
  <div class="page-content fade-in-up">
    <div class="page-heading">
      <div class="page-breadcrumb">
        <h1 class="page-title">Liste des tâches</h1>
      </div>
    </div>
    <div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-fullheight">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-4">
                <div>
                  <h5 class="box-title mb-2">Les tâches</h5>
                  <div class="text-muted font-13">Total {{ alltasksList.length }} tâches</div>
                </div>
                <button
                  class="btn btn-floating btn-sm btn-danger"
                  data-toggle="modal"
                  data-target="#tasksModalCenter"
                  title="Add New Task"
                  @click="createNewTask"
                >
                  <i class="la la-plus"></i>
                </button>
              </div>
              <div class="card-fullwidth-block">
                <ul class="list-group list-group-flush tasks-list">
                  <li class="list-group-item" v-for="task in alltasksList" :key="task.task_id">
                    <div>
                      <label class="checkbox checkbox-danger checkbox-circle">
                        <input
                          type="checkbox"
                          v-model="task.done"
                          @change="onChangeTaskStatus(task)"
                        />
                        <span>
                          <span class="h6">{{ task.task_name }}</span>
                        </span>
                      </label>
                    </div>
                    <div class="task-info">
                      <div class="text-muted font-13">{{ task.task_description }}</div>
                      <div class="font-13 mt-2">
                        <i class="la la-clock-o mr-2"></i>
                        {{ task.task_date }}
                      </div>
                    </div>
                    <div class="task-actions">
                      <a
                        class="text-muted"
                        data-toggle="modal"
                        data-target="#tasksModalCenter"
                        @click="onEditTask(task)"
                      >
                        <i class="la la-pencil"></i>
                      </a>
                      <a class="text-danger" @click="onDeleteTask(task)">
                        <i class="la la-close ml-2"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <task-modal :taskModalTitle="taskModalTile"></task-modal>
  </div>
</template>

<script>
import TaskModal from "@/components/tasks/TaskModal";
import { EventBus } from "@/eventBus";

export default {
  components: {
    TaskModal
  },
  data() {
    return {
      taskModalTile: ""
    };
  },
  methods: {
    createNewTask() {
      this.taskModalTile = "Ajouter une tâche";
      EventBus.$emit("create-task", true);
    },
    onChangeTaskStatus(task) {
      this.$store.dispatch("tasks/updateTaskStatus", task).then(response => {
        this.$awn.success(response.message, {
          icons: { success: "check" }
        });
      });
    },
    onDeleteTask(task) {
      this.$store.dispatch("tasks/deleteTask", task.task_id).then(response => {
        this.$awn.success(response.message, {
          icons: { success: "check" }
        });
      });
    },
    onEditTask(task) {
      this.taskModalTile = "Modifier une tâche";
      EventBus.$emit("edit-task", task);
    }
  },
  mounted() {
    this.$store.dispatch("tasks/getAllTasks");
  },
  computed: {
    alltasksList() {
      return this.$store.state.tasks.taskList;
    }
  }
};
</script>


<style lang="scss" scoped>
.tasks-list > li {
  padding-right: 0;
  padding-left: 0;
  padding: 0.8rem 1.5rem;
  &:hover {
    background-color: #dee2e6;
  }
  .task-actions {
    display: none;
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 50%;
    margin-top: -15px;
    .la {
      font-size: 1.5rem;
    }
    a.dropdown-toggle {
      color: #aaa;
      height: 30px;
      width: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  .task-info {
    padding-left: 34px;
  }
}
.tasks-list > li .checkbox input:checked ~ span {
  text-decoration: line-through;
}
.tasks-list > li:hover .task-actions {
  display: block;
}
</style>
