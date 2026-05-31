import { Award, BadgeCheck } from "lucide-react";
import imported from "../data/output/profile.imported.json";

const certifications = (imported.certifications ?? []) as string[];
const honorsAwards = (imported.honorsAwards ?? []) as string[];

interface CredentialGroupProps {
  title: string;
  icon: typeof Award;
  items: string[];
}

const CredentialGroup: React.FC<CredentialGroupProps> = ({
  title,
  icon: Icon,
  items,
}) => {
  if (!items.length) return null;

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-6 h-6 text-indigo-400" />
        <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-gray-800 bg-gray-800/40 px-5 py-4 text-gray-300 transition-colors hover:border-indigo-500/60 hover:bg-gray-800/70"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Certifications: React.FC = () => {
  if (!certifications.length && !honorsAwards.length) return null;

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Certifications & Awards
      </h2>
      <div className="grid gap-10 md:grid-cols-2">
        <CredentialGroup
          title="Certifications"
          icon={BadgeCheck}
          items={certifications}
        />
        <CredentialGroup
          title="Honors & Awards"
          icon={Award}
          items={honorsAwards}
        />
      </div>
    </section>
  );
};
