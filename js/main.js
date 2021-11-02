Vue.config.devtools = true;

/* Funzione-evento che parte alla lettura del contenuto del DOM della pagina */
/* Viene utilizzata per racchiudere tutte le variabili non rendendole globali */
window.addEventListener("DOMContentLoaded", function () {
    new Vue({
        el: "#root",
        data: {
            newTaskText: "", /* Serve v-model */
            newTaskColor: "#ff0000", /* Serve v-model */
            tasksList: [{
                    text: "Qualcosa",
                    checked: false
                },
                {
                    text: "Qualcos'altro",
                    checked: false
                }
            ]
        },
        methods: {
            onAddClick() {
                const newTask = this.newTaskText.trim();

                const foundElement = this.tasksList.some((el) => {
                    return el.text.toLowerCase() === newTask.toLowerCase();
                })

                if (newTask !== "" && !foundElement) {
                    this.tasksList.push({
                        text: newTask,
                        checked: false,
                        color: this.newTaskColor
                    });
                    this.newTaskText= "";
                }
            },
            onCloseClick(indexToDelete) {
                this.tasksList.splice(indexToDelete, 1);
            }
        }
    });
});
