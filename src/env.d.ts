/// <reference types="astro/client" />

declare module "*.elm" {
  const Elm: Record<
    string,
    {
      init: (options: { node: HTMLElement }) => { ports: any };
    }
  >;

  export { Elm };
}
