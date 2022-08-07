import {Main} from "./app/Main";
import {defaultState} from "./defaultState";

const renderApp = ()=>{

    const rendered : string = new Main(defaultState).render();
    const parentElem = document.getElementById("App");
    if(parentElem) {
        parentElem.innerHTML = rendered;
    }
}

renderApp();