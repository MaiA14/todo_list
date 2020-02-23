import utils from './utils.js';
export default class Todo{
    constructor(title, content){
        this.title = title;
        this.content = content;
        this.date = utils.getFormattedDate();
        this.time = utils.getFormattedTime();
        this.id = utils.getRandomID();
    }
}