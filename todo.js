const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: '',
      tasks: [
        'male huset',
        'ordne vasketøj',
        'gå ud med skrald'
      ]
    };
  },
  methods: {
    addTask() {
      const t = this.newTask.trim();
      if (t) {
        this.tasks.push(t);
        this.newTask = '';
      }
    },
    removeTask(i) {
      this.tasks.splice(i, 1);
    }
  }
}).mount('#app');