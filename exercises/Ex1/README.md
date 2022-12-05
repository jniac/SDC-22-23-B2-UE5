# Ex1 Forest Temple

## Brief

Créez un environnement simple mettant en scène un chemin menant à un temple isolé.

## Contraintes: 
- Le parcours général doit respecter les volumes du mesh "Ex1-ForestTemple" (Work/jniac/Misc).
- L'étape finale du parcours est un "temple"
- Le sol est un "Landscape"
- Le matériau du sol contient au minimum 2 "layers"

## Notions & connaissances abordées : 

- Éclairage / environnement (lighting / environment):
  - Sun (directional light)
  - Skylight (éclairer les zones à l'ombre)
  - "BP_SkySphere"
  - Build Light only

- Landscape
  - Sculpt
    - Smooth
    - Flatten
    - Ramp
  - Paint

- Material
  - Lit / Unlit
  - Advanced properties: TwoSided, wireframe
  - Base Color, Emissive Color

- Landscape Material
  - LayerBlend (BluePrint)
  - LandscapeCoords (BluePrint)
  - LayerInfo: 
    - ajouter un layer (édition multiple)
