export default function BannerTexts({ title, description }) {
  return (
    <div className="banner__texts">
      <h2 className="banner__texts_title">{title}</h2>
      <h3 className="banner__texts_description">{description}</h3>
    </div>
  );
}
