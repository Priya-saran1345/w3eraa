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
    'amp-img': React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement> & {
        layout?: string;
        width?: string | number;
        height?: string | number;
      },
      HTMLImageElement
    >;

    'amp-video': React.DetailedHTMLProps<
      React.VideoHTMLAttributes<HTMLVideoElement> & {
        layout?: string;
        width?: string | number;
        height?: string | number;
        autoplay?: string;
        loop?: string;
        muted?: string;
        'poster-src'?: string;
      },
      HTMLVideoElement
    >;
    'amp-story-bookend': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        layout?: string;
      },
      HTMLElement
    >;
  }
}
