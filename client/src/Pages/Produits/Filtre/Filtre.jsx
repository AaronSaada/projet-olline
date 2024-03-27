import React from 'react'

function Filtre() {
  return (
    <div className='filtre-container'>
        <div className='filtre-wrapper'>
            <h2>Filtres</h2>
            <div className='filtre-categorie-genre filtre-categorie'>
                <fieldset>
                    <legend>Catégorie</legend>
                    <div className='filtre-categorie-div'>
                        <input type="checkbox" id="homme" name="homme" />
                        <label htmlFor="homme">Homme</label>
                    </div>
                    <div className='filtre-categorie-div'>
                        <input type="checkbox" id="femme" name="femme" />
                        <label htmlFor="femme">Femme</label>
                    </div>
                    <div className='filtre-categorie-div'>
                        <input type="checkbox" id="enfant" name="enfant" />
                        <label htmlFor="enfant">Enfants (17 - 3)</label>
                    </div>
                    <div className='filtre-categorie-div'>
                        <input type="checkbox" id="bebe" name="bebe" />
                        <label htmlFor="bebe">Bébés (-3)</label>
                    </div>
                </fieldset>
            </div>
            <div className='filtre-categorie-vetements filtre-categorie'>
                <fieldset>
                    <legend>Type de vêtement</legend>
                    <div className='filtre-categorie-div'>
                        <input type="checkbox" id="veste" name="veste" />
                        <label htmlFor="veste">Veste</label>
                    </div>
                    <div className='filtre-categorie-div'>
                        <input type="checkbox" id="manteau" name="manteau" />
                        <label htmlFor="manteau">Manteau</label>
                    </div>
                    <div className='filtre-categorie-div'>
                        <input type="checkbox" id="pantalon" name="pantalon" />
                        <label htmlFor="pantalon">Pantalon</label>
                    </div>
                    <div className='filtre-categorie-div'>
                        <input type="checkbox" id="chaussures" name="chaussures" />
                        <label htmlFor="chaussures">Chaussures</label>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
  )
}

export default Filtre