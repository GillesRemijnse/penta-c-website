export default function PageCta({
  eyebrow,
  title,
  titleClassName,
  body,
  bodyClassName,
  actions,
  actionsClassName,
}) {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center bg-[#2F3A4C] text-white rounded-2xl p-12 md:p-16">
        {eyebrow ? (
          <p className="text-sm uppercase tracking-[0.2em] text-gray-300">
            {eyebrow}
          </p>
        ) : null}

        <h2 className={titleClassName}>{title}</h2>

        {body ? <p className={bodyClassName}>{body}</p> : null}

        <div className={actionsClassName}>{actions}</div>
      </div>
    </section>
  );
}
