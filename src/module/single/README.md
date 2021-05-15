# core/single

Ce module affiche un lien.

## Configuration

Le répertoire du widget doit avoir un fichier ***config.json*** contenant un
objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"color"` : la couleur de fond du cadre (au format hexadécimale, régulier RGB
  ou avec des mots-clefs prédéfinis) ;
- `"cron"` : la notation cron indiquant la fréquence de mise à jour.

Une image ayant pour nom ***icon.svg*** doit aussi est présente dans le
répertoire du widget.

## Scraper

Un seul scraper peut-être associé à ce module. Il doit définir une méthode
`extract()` qui retourne un tableau avec un seul objet JSON ayant les
propriétés :

- `"title"` : le titre ;
- `"desc"` : la description qui sera affichée dans l'info-bulle ;
- `"icon"` : l'URL de l'icône qui préfixera le titre ;
- `"link"` : le lien.

## Exemple

Cet exemple affiche un lien vers un article au hasard de *Wikipédia*.

```JSON
{
    "module": "core/single",
    "files": {
        "config.json": {
            "color": "#607d8b",
            "cron": "*/5 * * * *"
        }
    },
    "scrapers": [
        { "scraper": "community/regseb/single/articleauhasard" }
    ]
}
```
