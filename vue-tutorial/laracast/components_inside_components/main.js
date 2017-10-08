Vue.component('task-list',{

	//the div is necesary because in a template you must have a single root element
	template: `
		
		<div>
		
			<task v-for="task in tasks">{{ task.description }}</task>

		</div>'
	`,	

	data() {

		return {

			tasks: [

				{ description: 'Task 1', completed: false },
				{ description: 'Task 2', completed: true },
				{ description: 'Task 3', completed: false },
				{ description: 'Task 4', completed: true },
				{ description: 'Task 5', completed: false }

			]

		};

	}

});

Vue.component('task',{

	template: '<li><slot></slot></li>'

});

new Vue({

	el : '#root'

});