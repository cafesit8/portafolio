
export default function ({img, url, icon1, icon2, icon3, icon4}) {
  return (
    <a className="img-container relative overflow-hidden" target="_blank" href={url}>
      <picture className="w-full">
        <img className="w-full h-full object-cover" src={img} alt={img} />
      </picture>
      <div className="info absolute flex z-10 bottom-[-100%] max-[500px]:bottom-0">
        {icon1}
        {icon2}
        {icon3}
        {icon4 || null}
      </div>
    </a>
  );
}
