export default class Card{

    #char;
    #parent;
    #index;

    constructor(char, parent, index, msg){
        this.#char = char;
        this.#parent = parent;
        this.#index = index;
        this.cardPrint(msg);

        this.clickedElement = $(".card:last")

        this.#eventHandler();
    }

    cardPrint(){
        // console.log(this.#char);
        // console.log(this.#parent)
        if (this.#char == "ghost") {
            this.#parent.append(`
                <div class="card">
                    <i class="fa-solid fa-ghost hide ghost" id="char-${this.#index}"></i>
                </div>
            `);
        }
        else{
            this.#parent.append(`
                <div class="card">
                    <i class="fa-brands fa-freebsd hide demon" id="char-${this.#index}"></i>
                </div>
            `);
        }
        
    }

    #eventHandler(){
        this.clickedElement.on("click", ()=>{
            const e = new CustomEvent("CardClick", {detail: this.#index});
            window.dispatchEvent(e);
        })
    }
}