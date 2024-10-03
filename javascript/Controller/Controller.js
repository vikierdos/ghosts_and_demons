import Model from "../Model/Model.js";
import PlayPlace from "../View/PlayPlace.js";


export default class Controller{


    constructor(){
        this.parent = $(".play-place");
        this.init();
        this.#eventHandler();
        $(".theme").on("click", function () {
            $("body").toggleClass("dark");
        });
    }


    init() {
        this.model = new Model();
        //console.log(this.#model.getList());
        this.playPlace = new PlayPlace(this.parent, this.model.getList());
    }
    
    #eventHandler(){
        $(window).one("CardClick", (event) => {
            console.log(event.detail);
            $(`#char-${event.detail}`).toggleClass("hide");
            this.playPlace.setWinner(this.model.inspection(event.detail));
        });

        
    }
}