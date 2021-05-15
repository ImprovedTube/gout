# core/icon/ping

Ce scraper vérifie si un serveur est toujours accessible.

Il peut être utilisé avec le module `core/icon`.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"url"` : l'URL du serveur qui sera testé ;
- `"icon"` : l'URL d'une icône ;
- `"title"` : l'info-bulle affichée au survol ;
- `"link"` : le lien vers une page Internet ;
- `"colors"` : les couleurs de fond du cadre en fonction du retour de l'URL.

## Exemple

Cet configuration indique l'état du serveur `localhost`.

```JSON
{
    "module": "core/icon",
    "files": {
        "config.json": {
            "cron": "@hourly"
        }
    },
    "scrapers": [
        {
            "scraper": "core/icon/ping",
            "config": {
                "url": "http://localhost",
                "icon": "widget/me/ping/localhost/icon.svg",
                "desc": "localhost"
            }
        }
    ]
}
```
