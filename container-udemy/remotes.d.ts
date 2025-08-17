// src/remotes.d.ts

declare module "products/ProductsIndex" {
  export function mount (el: HTMLElement): void;
}

declare module "items/ItemsIndex" {
  const mount: (el: HTMLElement) => void;
  export { mount };
}
