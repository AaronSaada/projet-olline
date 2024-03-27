import React, { useState } from 'react'
import axios from 'axios'


export async function AjouterLeProduitAuPanier(idProduit) {
    
    // Cette partie fait les vérifications premières pour s'assurer que le localstorage est bien créer
    // vérifie si les produits sont présents dans le localstorage, si non, sors de la fonction
    if (!localStorage.getItem("ListeProduits")) {
        return
    } else {
        // vérifie si le panier a été crée, si non, sors car le panier est crée avec la liste des produits
        if (!localStorage.getItem("panier")) {
            return
        } else {
            // Va venir chercher la liste des produits existants
            var grabListeProduits = await JSON.parse(localStorage.getItem("ListeProduits"))

            // Va venir chercher le panier et son contenu
            var panier = await JSON.parse(localStorage.getItem("panier"))


            // Va contenir les valeurs du produit
            var produitQuiVaDansLePanier = [""]


            // Va chercher dans la liste des produits si l'id du produit existe dedans
            for (let i = 0; grabListeProduits[i]; i++) {
                if (parseInt(grabListeProduits[i].id_products) === idProduit) {
                    produitQuiVaDansLePanier = grabListeProduits[i]
                    produitQuiVaDansLePanier.quantity = 1
                }
            }

            // si le panier est vide, va ajouter directement le produit
            if (panier.length === 0) {
                panier.push(produitQuiVaDansLePanier)
            } else {

                // variable pour checker si le produit existe déjà dans le panier
                var checkSiExisteDansLePanier = []

                // passe une fois dans la liste du panier pour vérifier que le produit est bien dedans
                for (let i = 0; panier[i]; i++) {
                    if (panier[i].id_products === idProduit) {
                        checkSiExisteDansLePanier[0] = panier[i]
                        produitQuiVaDansLePanier.quantity = panier[i].quantity
                    }
                }

                // Si le produit n'as pas été trouvé dans la liste
                if (checkSiExisteDansLePanier === undefined) {
                    produitQuiVaDansLePanier.quantity += 1
                    panier.push({ produitQuiVaDansLePanier })
                } else {

                    // change la quantité à +1 si le produit est dans le panier
                    var estDansLePanier = false
                    for (let i = 0; panier[i]; i++) {
                        if (panier[i].id_products === idProduit) {
                            panier[i].quantity += 1
                            estDansLePanier = true
                        }
                    }
                    if (estDansLePanier === false) {
                        panier.push(produitQuiVaDansLePanier)
                    }
                }
            }
        }
        // Le local storage n'accepte pas d'objet, je transforme donc mon tableau en une string
        localStorage.setItem("panier", JSON.stringify(panier))
    }
}

export async function EnleverUneQuantiteDuPanier(idProduit) {
    if(!localStorage.getItem("ListeProduits")){
        return
    } else {
        if(!localStorage.getItem("panier")){
            return
        } else{
           // Va venir chercher la liste des produits existants
           var grabListeProduits = await JSON.parse(localStorage.getItem("ListeProduits"))

           // Va venir chercher le panier et son contenu
           var panier = await JSON.parse(localStorage.getItem("panier"))


           // Va contenir les valeurs du produit
           for(let i = 0; panier[i]; i++){
            if(panier[i].id_products === idProduit){
                if(panier[i].quantity > 1){
                    panier[i].quantity -=1
                }else{
                    panier.splice(i, 1);
                }
            }
           }
        }
        localStorage.setItem("panier", JSON.stringify(panier))
    }
}

export function AnnulerSaCommande(){
    localStorage.setItem("panier","[]")
}

export async function ValiderLePanier(idUser){
    try{
        var grabListeProduit = await JSON.parse(localStorage.getItem("ListeProduits"))

        var panier = await JSON.parse(localStorage.getItem("panier"))

        // FAIS TA COMMANDE SI TU DOIS CREER UN PREMIER NUMERO DE COMMANDE
        // SINON SUPPRIME LA LIGNE

        for(let i = 0; panier[i]; i++){
            var PanierQuantiteRetirerDuStock = []
            for(let j = 0; grabListeProduit[j]; j++){
                if(panier[i].id_products === grabListeProduit[j]){
                    PanierQuantiteRetirerDuStock = grabListeProduit
                    PanierQuantiteRetirerDuStock.quantity = PanierQuantiteRetirerDuStock - panier[i].quantity
                }
            }
            // FAIRE TON AXIOS QUI ENVOIT LA VARIABLE PANIERQUANTITEDUSTOCK DANS TON BACK SANS RIEN CHANGER
            // L'AXIOS DOIT JUSTE FAIRE UN PUT SUR LA QUANTITE EN LA CHANGEANT PAR CELLE QUI A ETE FOURNIE DANS LA VARIABLE
            // LA QUANTITE A ETE RETIRER DIRECTEMENT
        }
        AnnulerSaCommande()
    }catch(err){
        console.error("Erreur lors de l'envoi des données dans le back.")
    }
}

export function Panier() {
    return (
        <div>Panier</div>
    )
}
