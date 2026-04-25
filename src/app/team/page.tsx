import teamData from "@/lib/data/team.json";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  order: number;
}

const team = (teamData as TeamMember[]).sort((a, b) => a.order - b.order);

export default function TeamPage() {
  return (
    <section className="py-section-mobile desktop:py-section-desktop">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">Team</h1>

        {team.length === 0 ? (
          <p className="text-text-muted">Aktuell keine Team-Mitglieder eingetragen.</p>
        ) : (
          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="bg-surface p-6 rounded-lg shadow-card">
                <h2 className="text-lg font-semibold">{member.name}</h2>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-text-muted text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
