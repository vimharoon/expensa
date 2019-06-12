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
                >
                  <i class="la la-plus"></i>
                </button>
              </div>
              <div class="card-fullwidth-block">
                <ul class="list-group list-group-flush tasks-list">
                  <li class="list-group-item" v-for="task in alltasksList" :key="task.task_id">
                    <div>
                      <label class="checkbox checkbox-danger checkbox-circle">
                        <input type="checkbox" v-if="task.task_done ? 'checked' : ''">
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
                      <a class="text-muted" href="#">
                        <i class="la la-pencil"></i>
                      </a>
                      <a class="text-danger" href="#">
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
    <new-task-modal></new-task-modal>
  </div>
</template>

<script>
import NewTaskModal from "@/components/tasks/NewTaskModal";
export default {
  components: {
    NewTaskModal
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
