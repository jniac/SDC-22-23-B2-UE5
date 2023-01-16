# Ex2: Le Temple Dans La Montagne

<img width="640" src="overview.jpg">

## Brief

Créez un environnement complexe mettant en scène un chemin menant à un temple isolé.
Le chemin est escarpé, la destination finale n'est pas immédiatement visible, 
certains passages nécessiteront d'être ajustés finement pour permettre le 
franchissement (saut hauteur / longueur).

Cet environnement sera complété dans un second temps par l'ajout d'un artefact 
(dans le temple), par la présence d'un léger sound design.

## Contraintes : 
- Le parcours général doit respecter les volumes du mesh "Ex2-MountainTemple" 
  (Work/jniac/Misc). Les volumes peuvent être ainsi résumés : 
    - Le joueur commence dans un vallon étroit, encaissé, la montagne le surplombe, 
    il faut lever la tête pour voir le ciel. 
    - Une fois sorti du premier lieu, le joueur progress à flanc de montagne, le 
    paysage est dégagé sur sa gauche.
    - Un obstacle se présente sur le chemin, masquant la suite du parcours.
    - L'obstacle franchit une ascension difficile survient alors,
    - Au terme de laquelle se trouve le temple.
- L'étape finale du parcours est un "temple"
- Une étape intermédiaire présente un obstacle dont le franchissement amène 
  à la révélation de la destination ultime (le temple).
- Le sol est un "Landscape"
- Le matériau du sol contient au minimum 3 "layers" (ex 1. "Rock", 2. "Grass", 3. "Dirt").
- L'environnement apparaît riche et détaillé grâce à l'utilisation de "Foliage" 
  (végétation, petits rochers).
- L'horizon est cohérent tout au long du parcours (il n'y a pas de gros "trous").


## Rendu : 
[Coté "Unreal"](https://github.com/jniac/SDC_2223_B2_CMNPRJCT) :
- Un "level" (map) nommé XXX_EX2_YYYYY dans le dossier `Content/Work/ZZZ` où :
  - `XXX` est le préfixe en 3 lettres associés à chaque étudiant (et dérivé du pseudo github).
  - `YYY` une séquence de lettres sans importance (par exemple "MonJoliTemple").
  - `ZZZ` est le pseudo github (à la majuscule près).

[Coté "web"](https://github.com/jniac/SDC-22-23-B2-UE5) : 
- Une page web (ex: exercice2.html) dans le dossier `work/XXX` (où `XXX` est le 
  pseudo github). 
    - Cette page doit être accessible (lien) dans la page index.html 
    de chaque étudiant.
    - Les assets nécessaire (image, css) doivent être présents et correctement
    référencés.
    - Cette page web contient 7 captures d'écran (in game): 
      - 1 : Le point de départ.
      - 2 : Progression à flanc de montagne.
      - 3 : Vue sur l'obstacle masquant la suite du chemin.
      - 4 : Vue juste après l'obstacle.
      - 5 : Vue sur le temple.
      - 6 : Vue à l'interieur du temple.
      - 7 : Vue général (vue du ciel, vue éditeur).
