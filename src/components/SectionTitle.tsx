export const SectionTitle: React.FC<{ title: string; id: string }> = ({
  title,
  id,
}) => (
  <h2
    id={id}
    className="text-3xl font-bold text-white text-center mb-12 pt-16 -mt-16 sm:pt-24 sm:-mt-24"
  >
    {title}
  </h2>
);
