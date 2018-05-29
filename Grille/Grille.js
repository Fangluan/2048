import React, { Component } from 'react';

class Grille extends Component {
    super()
    // CONSTRUCTEUR
    state = {
        score_iter : 0, //Es vraiment un attribut de Grille ?
        score_total : 0, //Es vraiment un attribut de Grille ?
        cases_vides : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
        ], // Indice ds liste_cases de chaque "case"
        liste_cases: [ //case (1,1) en haut à gauche, case (5,5) en bas à droite)
            {  colonne :  1, ligne: 1, valeur: null },
            {  colonne :  1, ligne: 2, valeur: null },
            {  colonne :  1, ligne: 3, valeur: null },
            {  colonne :  1, ligne: 4, valeur: null },
            {  colonne :  1, ligne: 5, valeur: null },
            {  colonne :  2, ligne: 1, valeur: null },
            {  colonne :  2, ligne: 2, valeur: null },
            {  colonne :  2, ligne: 3, valeur: null },
            {  colonne :  2, ligne: 4, valeur: null },
            {  colonne :  2, ligne: 5, valeur: null },
            {  colonne :  3, ligne: 1, valeur: null },
            {  colonne :  3, ligne: 2, valeur: null },
            {  colonne :  3, ligne: 3, valeur: null },
            {  colonne :  3, ligne: 4, valeur: null },
            {  colonne :  3, ligne: 5, valeur: null },
            {  colonne :  4, ligne: 1, valeur: null },
            {  colonne :  4, ligne: 2, valeur: null },
            {  colonne :  4, ligne: 3, valeur: null },
            {  colonne :  4, ligne: 4, valeur: null },
            {  colonne :  4, ligne: 5, valeur: null },
            {  colonne :  5, ligne: 1, valeur: null },
            {  colonne :  5, ligne: 2, valeur: null },
            {  colonne :  5, ligne: 3, valeur: null },
            {  colonne :  5, ligne: 4, valeur: null },
            {  colonne :  5, ligne: 5, valeur: null },            
        ]
    }
    
    // METHODES
    
    initialiser_grille = () => { // Pour toute les case, passer l'attribut "val" à null
        for (let i=0; i<25; i++) {
            this.setState(this.state.liste_cases[i].val = null)
        console.log("initialiser_grille appellée. State de Grille résultant : ", this.state)
        }
    }
    push_droite = () => { //Iterrer de ligne=5 à ligne=0 (puis sur les colonne)
    }
    push_gauche = () => { 
    }
    push_bas = () => { 
    }
    push_haut = () => { 
    }
    case_vide = () => { 
    }

    //AFFICHAGE
    render() {

        return
    }
}

export default Grille;
