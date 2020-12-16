/*!
 * lazy-img ES6 module - Lazy loading <img/> elements
 *
 * Copyright (c) 2020 MarsRaptor
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://github.com/MarsRaptor/lazy-img
 *
 * Version: 1.0.0
 *
 */

/**
 * @typedef { keyof HTMLElementEventMap} K
 * @typedef {{ load_on_event: K | undefined, target_tag:string | undefined, lazy_tag:string | undefined, src_attribute:string | undefined, srcset_attribute:string | undefined, activation_attribute:string | undefined, activation_activated_value:string | undefined }} lazy_image_init_options
 * @typedef {{forceLoad():void}} forceLoad
 */

const defaults = {
    target_tag: "img",
    lazy_tag: "lazy-img",
    src_attribute: "data-src",
    srcset_attribute: "data-srcset",
    activation_attribute: "activated",
    activation_activated_value: "true"
}

const registered_force_loader = [];

const lazy_img = {

    /**
     * @param {{lazy_src:string, loading_src:string}} params 
     * @param {lazy_image_init_options | undefined} options 
     * @returns {forceLoad}
     */
    init({ lazy_src, loading_src } = {}, { load_on_event, target_tag, lazy_tag, src_attribute, srcset_attribute, activation_attribute, activation_activated_value } = {}) {

        if (!lazy_src) {
            throw "lazy-img init requires a default [lazy_src]";
        }
        if (!loading_src) {
            throw "lazy-img init requires a default [loading_src]";
        }

        const settings = {
            target_tag: target_tag || defaults.target_tag,
            lazy_tag: lazy_tag || defaults.lazy_tag,
            src_attribute: src_attribute || defaults.src_attribute,
            srcset_attribute: srcset_attribute || defaults.srcset_attribute,
            activation_attribute: activation_attribute || defaults.activation_attribute,
            activation_activated_value: activation_activated_value || defaults.activation_activated_value
        };
        customElements.define(settings.lazy_tag, class extends HTMLImageElement {
            static get observedAttributes() { return [settings.activation_attribute]; }
            constructor() {
                super();
                this.src = lazy_src;
                if (load_on_event) {
                    const _ = () => {
                        this.setAttribute(settings.activation_attribute, settings.activation_activated_value);
                        this.removeEventListener(load_on_event, _);
                    };
                    this.addEventListener(load_on_event, _);
                }
            }
            attributeChangedCallback(_, __, newValue) {
                if (newValue === settings.activation_activated_value && (this.hasAttribute(settings.src_attribute) || this.hasAttribute(settings.srcset_attribute))) {
                    let loading_chain = () => {
                        this.removeEventListener("load", loading_chain);
                        if (this.hasAttribute(settings.src_attribute)) {
                            this.src = this.getAttribute(settings.src_attribute);
                        }
                        if (this.hasAttribute(settings.srcset_attribute)) {
                            this.srcset = this.getAttribute(settings.srcset_attribute);
                        }
                    }
                    this.addEventListener("load", loading_chain);
                    this.src = loading_src;
                }
            }
        }, { extends: settings.target_tag });
        function forceLoad() {
            const lazy_images = document.querySelectorAll(`${settings.target_tag}[is="${settings.lazy_tag}"]`);
            for (let lazy_image_index = 0; lazy_image_index < lazy_images.length; lazy_image_index++) {
                lazy_images.item(lazy_image_index).setAttribute(settings.activation_attribute, settings.activation_activated_value);
            }
        };
        registered_force_loader.push(forceLoad);
        return {
            forceLoad
        }

    },

    forceLoad() {
        for (let force_loader_index = 0; force_loader_index < registered_force_loader.length; force_loader_index++) {
            registered_force_loader[force_loader_index].call();
        }
    }
}

export default lazy_img;