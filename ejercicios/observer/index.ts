import { Http2SecureServer } from "http2";

interface Observer{
    update: (data: any)=> void
}

interface Subject{
    subcribe: (observer: Observer)=> void
    unsubcribe: (observer: bserver)=>void
}


class BitcoinPrice implements Subject{
    observers: Observer[] = [];

    constructor(){
        const el: HTMLInputElement = document.querySelector('#value');
        el.addEventListener('input',()=>{
            this.notify(el.value);
        })
    }

    subcribe(observer: Observer){
        this.observers.push(observer)
    }

    unsuscribe(observer: Observer){
        const index = this.observers.findIndex(obs=>{
            return obs === observer
        })

        this.observers.splice(index, 1);
    }



    notify(){
        this.observers.forEach(observerr => observerr.update(data))
    }
}


class PriceDisplay implements Observer{
    private el: HTMLElement;
    contructor(){
        this.el = document.querySelector('#price')
    }
    update(data: any){
        this.el.innerText = data;
    }

}


const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subcribe(display);

setTimeout(()=> value.unsuscribe(display), 5000);