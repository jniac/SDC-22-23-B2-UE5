# Ex1 : Le Temple Dans La Forêt.

## Brief

Créez un environnement simple mettant en scène un chemin menant à un temple isolé.

## Contraintes: 
- Le parcours général doit respecter les volumes du mesh "Ex1-ForestTemple" (Work/jniac/Misc).
- L'étape finale du parcours est un "temple"
- Le sol est un "Landscape"
- Le matériau du sol contient au minimum 2 "layers" (ex 1. "Rock", 2. "Grass").

## Notions & connaissances abordées : 

- Éclairage / environnement (lighting / environment):
  - Sun (directional light)
  - Skylight (éclairer les zones à l'ombre)
  - "BP_SkySphere"
  - Build Light only (inutile sur PC/UE5?)

- Landscape
  - Sculpt
    - Smooth
    - Flatten
    - Ramp
  - Paint

- Landscape Material
  - LayerBlend (BluePrint)
  - LandscapeCoords (BluePrint)
  - LayerInfo: 
    - ajouter un layer (édition multiple)
