'use strict';

//destrutturo create app da Vue
const { createApp } = Vue;

//istanzio app
const myApp = createApp({
  data() {
    return {
      newTask: '',
      keyTask: '',
      tasks: ['Fare una passeggiata', 'Leggere un libro', 'Mangiare un gelato'],
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask() {
      if (this.newTask.trim() !== null) {
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    },

    filteredTask() {
      if (this.keyTask.trim() !== '') {
        return this.tasks.filter((task) =>
          task.toLowerCase().includes(this.keyTask.toLowerCase())
        );
      } else {
        return this.tasks;
      }
    },
  },
});

//monto app su dom
myApp.mount('#app');
