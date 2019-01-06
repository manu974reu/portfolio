
import { Injectable, Inject } from '@angular/core';
import { WINDOW } from './window.service';
@Injectable({
    providedIn: 'root',
})
export class ScrollNavBar {

    constructor(@Inject(WINDOW) private window: Window) {

    }
    /**
     * 
     * @param id initialisation de l'id de la barre de navigation
     * @param valueStartScroll valeur de départ du scrool
     * @param styleTopStart valeur du depart du style.top
     * @param startBoostrapClassScroll ajustement de la classe boostrap
     * @param valueMiddleScrool valeur de milieux 0 à valueendScroll du scrool
     * @param styleTopMiddle ajustement du style.top
     * @param middleBoostrapClassScroll ajustement de la classe boostrap
     * @param valueEndScrool valeur  fin de scrool
     * @param styleTopEnd ajustement du style.top
     * @param endBoostrapClassScroll ajustement de la classe boostrap
     * @param valueAfterScroll valeur after scrool
     * @param styleAfterTop ajustement du style.top
     */
    scrollNavbar(id: string, valueStartScroll: number, styleTopStart: string,
        startBoostrapClassScroll: string, valueMiddleScrool: number, styleTopMiddle: string,
        middleBoostrapClassScroll: string,
        valueEndScrool: number, styleTopEnd: string,
        endBoostrapClassScroll: string, valueAfterScroll: number, styleAfterTop: string) {
        window.onscroll = () => {
            if (window.pageYOffset === valueStartScroll) {
                document.getElementById(id).style.top = styleTopStart;
                document.getElementById(id).classList.value = startBoostrapClassScroll;
            } else if (window.pageYOffset > valueAfterScroll) {
                    document.getElementById(id).style.top = styleAfterTop;
            } else if (window.pageYOffset > valueMiddleScrool) {
                document.getElementById(id).style.top = styleTopMiddle;
                document.getElementById(id).classList.value = middleBoostrapClassScroll;
            } else if (window.pageYOffset < valueEndScrool) {
                document.getElementById(id).style.top = styleTopEnd;
                document.getElementById(id).classList.value = endBoostrapClassScroll;
            }
        };
    }
}
