/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ProductDetails {
    'itemId': number;
  }
}

declare global {


  interface HTMLProductDetailsElement extends Components.ProductDetails, HTMLStencilElement {}
  var HTMLProductDetailsElement: {
    prototype: HTMLProductDetailsElement;
    new (): HTMLProductDetailsElement;
  };
  interface HTMLElementTagNameMap {
    'product-details': HTMLProductDetailsElement;
  }
}

declare namespace LocalJSX {
  interface ProductDetails extends JSXBase.HTMLAttributes<HTMLProductDetailsElement> {
    'itemId'?: number;
  }

  interface IntrinsicElements {
    'product-details': ProductDetails;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


