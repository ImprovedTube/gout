# Scraper _list/rss_

> Mots-clés : gout, gout-scraper, gout-scraper-list-rss, gout-module-list,
> gout-module-single, gout-module-podcast, gout-module-image.

Ce scraper récupère les derniers éléments d'un flux **RSS** / **Atom**.

Il peut être utilisé avec les modules :

- [_list_](https://github.com/regseb/gout/tree/HEAD/src/module/list#readme) ;
- [_single_](https://github.com/regseb/gout/tree/HEAD/src/module/single#readme)
  pour afficher seulement le dernier élément ;
- [_podcast_](https://github.com/regseb/gout/tree/HEAD/src/module/podcast#readme)
  pour un flux RSS avec des `enclosure` de type `audio` ;
- [_image_](https://github.com/regseb/gout/tree/HEAD/src/module/image#readme)
  pour un flux RSS avec des `enclosure` de type `image`.

## Options

Les options sont dans un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

<table>
  <tr>
    <th>Nom</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>"url"</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        L'URL vers un flux RSS ou Atom.
      </p>
      <p>
        Exemple : <code>"https://example.com/foo/bar.rss"</code>.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>"complements"</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Des propriétés qui seront ajoutées dans les éléments retournés. Par
        défaut aucune propriété n'est ajoutée.
      </p>
      <p>
        Exemple : <code>{ "icon": "https://example.com/foo/bar.svg" }</code>.
      </p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche les cinq dernières actualités du site [Le
Monde.fr](https://www.lemonde.fr/).

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/list/list.js",
        "options": {
            "color": "#757575",
            "cron": "*/10 * * * *",
            "max": 5
        }
    },
    "scrapers": [{
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/list/rss/rss.js",
        "options": {
            "url": "https://www.lemonde.fr/rss/une.xml"
        }
    }]
}
```
