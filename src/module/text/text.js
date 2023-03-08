/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import Cron from "https://cdn.jsdelivr.net/npm/cronnor@2/+esm";

export default class Text extends HTMLElement {
    #options;

    #scrapers;

    #cron;

    #empty;

    constructor(options, scrapers) {
        super();
        this.#options = options;
        this.#scrapers = scrapers;
    }

    #display(item, empty = false) {
        const div = this.shadowRoot.querySelector("div");
        div.style.backgroundColor = item.color ?? "#757575";
        div.textContent = Array.isArray(item.title)
            ? item.title.join("")
            : item.title;
        div.style.backgroundImage =
            undefined === item.icon ? "none" : `url("${item.icon}")`;
        div.style.textAlign = item.align ?? "left";
        if (empty) {
            div.classList.add("empty");
        } else {
            div.classList.remove("empty");
        }
        div.title = item.desc ?? "";
    }

    async #update(force = false) {
        // Si la page est cachée : ne pas actualiser les données et indiquer
        // qu'il faudra mettre à jour les données quand l'utilisateur reviendra
        // sur la page.
        if (document.hidden && !force) {
            this.#cron.stop();
            return;
        }

        const results = await Promise.all(
            this.#scrapers.map((s) => s.extract(1)),
        );
        const items = results
            .flat()
            .sort((i1, i2) => (i2.date ?? 0) - (i1.date ?? 0))
            .slice(0, 1);

        if (0 === items.length) {
            this.#display(this.#empty, true);
        } else {
            this.#display(items[0]);
        }
    }

    #wake() {
        if (!this.#cron.active) {
            this.#cron.start();
            this.#update();
        }
    }

    async connectedCallback() {
        const response = await fetch(import.meta.resolve("./text.tpl"));
        const text = await response.text();
        const template = new DOMParser()
            .parseFromString(text, "text/html")
            .querySelector("template");

        this.attachShadow({ mode: "open" });
        this.shadowRoot.append(template.content.cloneNode(true));

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = import.meta.resolve("./text.css");
        this.shadowRoot.append(link);

        this.#empty = this.#options.empty ?? {};

        if (undefined !== this.#options.cron) {
            this.#cron = new Cron(this.#options.cron, this.#update.bind(this));
            document.addEventListener(
                "visibilitychange",
                this.#wake.bind(this),
            );
        }
        this.#update(true);
    }
}
