declare namespace JSX {
    interface IntrinsicElements {
      'amp-story': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          standalone?: string;
          title?: string;
          publisher?: string;
          'publisher-logo-src'?: string;
          'poster-portrait-src'?: string;
        },
        HTMLElement
      >;
      'amp-story-page': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id: string;
        },
        HTMLElement
      >;
      'amp-story-grid-layer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          template: 'fill' | 'vertical' | 'horizontal' | 'thirds';
        },
        HTMLElement
      >;
    }
  }