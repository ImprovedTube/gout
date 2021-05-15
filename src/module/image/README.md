# core/image

Ce module affiche des images extraites de sites Internet.

## Configuration

Le répertoire du widget doit avoir un fichier ***config.json*** contenant un
objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"max"` : le nombre d'images qui seront affichées ;
- `"cron"` : la notation cron indiquant la fréquence de mise à jour.

## Scraper

Les scrapers associés à ce module doivent définir une méthode `extract()` qui
prend en paramètre un entier indiquant le nombre maximal de résultats à
retourner. Chaque résultat est un objet JSON ayant les propiétés :

- `"img"` : l'adresse de l'image ;
- `"title"` : le titre de l'image (qui sera affiché dans une info-bulle) ;
- `"link"` : l'adresse vers la page Internet affichant l'image ;
- `"guid"` : un identifiant unique de l'image (son adresse par exemple) ;
- `"date"` : le nombre de millisecondes depuis le 1er janvier 1970 à 00:00:00
  UTC.

## Exemple

Cet exemple affiche les trois dernières images du site *Urtikan*.

```JSON
{
    "module": "core/image",
    "files": {
        "config.json": {
            "max": 3,
            "cron": "0 */3 * * *"
        }
    },
    "scrapers": [
        { "scraper": "community/regseb/image/urtikan" }
    ]
}
```
