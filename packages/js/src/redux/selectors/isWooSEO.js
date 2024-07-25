import { get } from "lodash";

/**
 * Determines whether the WooCommerce SEO addon is not active in a product page.
 *
 * @returns {Boolean}       Whether the plugin is WooCommerce SEO or not.
 */
export const getIsWooSeoUpsell = () => get( window, "wpseoScriptData.woocommerceUpsell", false );


/**
 * Determines whether the WooCommerce SEO addon is active.
 *
 * @returns {Boolean}       Whether the plugin is WooCommerce SEO or not.
 */
export const getIsWooSeoActive = () => Boolean( get( window, "wpseoScriptData.isWooCommerceSeoActive", false ) );

/**
 * Checks if WooCommerce is active.
 *
 * @returns {boolean} True if WooCommerce is active.
 */
export const getIsWooCommerceActive = () => Boolean( get( window, "wpseoScriptData.isWooCommerceActive", false ) );
