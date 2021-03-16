export class Model {
    user : string;
    items : TodoItem[];

    constructor() {
        this.user = "Berk KESKİN"
        this.items = [
            new TodoItem("Sport", true),
            new TodoItem("Breakfast", false),
            new TodoItem("Reading Book", false),
            new TodoItem("Haircut", false),
            new TodoItem("Cinema", false)
        ];
    }
}

export class TodoItem {
    description : string;
    action : boolean;

    constructor(description : string, action : boolean){
        this.description = description;
        this.action = action;
    }
}