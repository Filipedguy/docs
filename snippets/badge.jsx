export const Badge = ({ alt, src, link, display = 'inline' }) => (
<a href={link} target="_blank">
  <img 
    src={src}
    alt={alt}
    noZoom
    style={{ display }}
  />
</a>);