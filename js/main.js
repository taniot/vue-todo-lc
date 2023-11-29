'use strict';

//destrutturo create app da Vue
const { createApp } = Vue;

//istanzio app
const myApp = createApp({
  data() {
    return {
      newTask: '',
      keyTask: '',
      tasks: [
        {
          text: 'Fare una passeggiata',
          done: false,
        },
        {
          text: 'Leggere un libro',
          done: false,
        },
        {
          text: 'Mangiare un gelato',
          done: false,
        },
      ],
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask() {
      if (this.newTask.trim() !== null) {
        // this.tasks.push(this.newTask);
        this.tasks.push({
          text: this.newTask,
          done: false,
        });
        this.newTask = '';
      }
    },
    doneTask(index) {
      console.log(index);
      console.log("gestisco lo stato dell'evento");
      this.tasks[index].done = !this.tasks[index].done;
    },
    //deve restituire sempre un array
    filteredTask() {
      if (this.keyTask.trim() !== '') {
        return this.tasks
          .filter((task) =>
            task.text.toLowerCase().includes(this.keyTask.toLowerCase())
          )
          .map((task) => {
            return {
              ...task,
              text: task.text + ' ciao',
            };
          });
      } else {
        return this.tasks;
      }
      // return [
      //   {
      //     text: 'Mangiare un gelato',
      //     done: false,
      //   },
      // ];
      // return this.tasks;
    },
  },
});

//monto app su dom
myApp.mount('#app');
