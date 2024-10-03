export default class Model{
    
    #list = [];

    constructor(){
        this.listUpload();
    }

    listUpload(){
        for (let i = 0; i < 20; i++) {
            var r = Math.floor(Math.random() * 100) + 1;
            if(r <= 30){
                this.#list.push("demon");
            }
            else{
                this.#list.push("ghost");
            }
        }
    }

    getList(){
        return this.#list;
    }

    inspection(index){
        if(this.#list[index] == 'ghost'){
            return "The pure souls have saved you!"
        }
            return "Oh no! The demons have got you in their grasps!"
    }
}