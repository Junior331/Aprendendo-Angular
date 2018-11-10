import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

 tasks:Task[] = [
   { taskName: "programar" , done: true},
   { taskName: "soltar pipa" , done: true},
   { taskName: "jogar bola" , done: false},
   { taskName: "voltar a programar" , done: false}
];
add(taskName, done){
  let task: Task = {taskName: taskName, done: done };
  this.tasks.push(task)

}
del(index){
  this.tasks.splice(index, 1);
}



}

class Task {
  public taskName: string;
  public done:boolean;
}