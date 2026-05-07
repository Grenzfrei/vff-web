interface EventArea {
  name: string;
  description: string;
  icon?: string;
}

interface EventAreaCardProps {
  area: EventArea;
}

export default function EventAreaCard({ area }: EventAreaCardProps) {
  return (
    <div className="bg-surface p-6 rounded-lg shadow-card text-center">
      {area.icon && (
        <div className="text-4xl mb-3" aria-hidden="true">
          {area.icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-primary mb-2">{area.name}</h3>
      <p className="text-text-muted">{area.description}</p>
    </div>
  );
}
