
export default function ({img, url, urlGitHub, typescript, html, react, css, sass, js, tailwind, firebase, github}) {
  return (
      <a className="img-container relative overflow-hidden" target='_blank' href={url} >
        <picture className="w-full">
          <img className="w-full h-full object-cover" fetchpriority='low' src={img} alt={img} />
        </picture>
        <div className="info absolute flex z-10 bottom-[-100%] max-[500px]:bottom-0">
          <picture className="w-[30px] h-[30px] self-end mb-3 ml-4">
            <img className="w-full h-full object-contain" fetchpriority='low' alt={html || react} src={html || react} />
          </picture>
          {typescript && <picture className="w-[30px] h-[30px] self-end mb-3 ml-4">
            <img className="w-full h-full object-contain" fetchpriority='low' alt={typescript} src={typescript} />
          </picture>}
          <picture className="w-[30px] h-[30px] self-end mb-3 ml-4">
            <img className="w-full h-full object-contain" fetchpriority='low' alt={css || sass || tailwind} src={css || sass || tailwind} />
          </picture>
          {js || firebase  ?
            <picture className="w-[30px] h-[30px] self-end mb-3 ml-4">
              <img className="w-full h-full object-contain" fetchpriority='low' alt={js || firebase} src={js || firebase} />
            </picture> : null}
          <a className="icon self-end z-40" target='_blank' href={urlGitHub}>
            <img className="w-[35px] h-[35px] mb-3 ml-4" fetchpriority='low' alt={github} src={github} />
          </a>
        </div>
      </a>
  );
}
