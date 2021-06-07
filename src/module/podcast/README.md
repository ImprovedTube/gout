# core/podcast

Ce module affiche la liste des dernières émissions audio d'un podcast.

## Configuration

Le répertoire du widget doit avoir un fichier ***config.json*** contenant un
objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"color"` : la couleur de fond du cadre (au format hexadécimale, régulier RGB
  ou avec des mots-clefs prédéfinis) ;
- `"cron"` : la notation cron indiquant la fréquence de mise à jour.
- `"max"` (optionnel - aucune limite par défaut) : le nombre maximal d'éléments
  affichés dans le widget.

Une image ayant pour nom ***icon.svg*** peut aussi est présente dans le
répertoire du widget. Par défaut, le symbole *Podcast* sera utilisé. L'image
doit être carrée et le dessin doit occupé toute la zone de l'image. Si le dessin
n'est pas carré, il faut le centrer verticalement et l'aligner à droite. Seule
la couleur noire doit être utilisée et elle doit avoir une opacité de `0.2`.

## Scraper

Les scrapers associés à ce module doivent définir une méthode `extract()` qui
prend en paramètre un entier indiquant le nombre maximal de résultats à
retourner. Chaque résultat est un objet JSON ayant les propriétés :

- `"title"` : le titre de l'émission ;
- `"audio"` : l'URL du fichier audio ;
- `"desc"` : la description de l'émission qui sera affichée dans l'info-bulle ;
- `"link"` : le lien de la page Internet de l'émission ;
- `"icon"` : l'URL de l'icône qui préfixera le titre ;
- `"guid"` : un identifiant de l'émission ;
- `"date"` : le nombre de millisecondes depuis le 1er janvier 1970 à 00:00:00
  UTC.

## Exemple

Cette configuration affiche les deux dernières émissions du podcast *Studio
404*.

```JSON
{
    "module": "core/podcast",
    "files": {
        "config.json": {
            "color": "black",
            "cron": "@daily",
            "max": 2
        }
    },
    "scrapers": [
        {
            "scraper": "core/feed/rss",
            "config": {
                "url": "https://feed.pippa.io/public/shows/studio-404"
            }
        }
    ]
}
```
