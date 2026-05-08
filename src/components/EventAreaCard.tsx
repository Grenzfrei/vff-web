import Image from "next/image";

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
    <div className="bg-surface p-6 rounded-3xl shadow-card hover:shadow-card-hover transition-shadow text-center">
      {area.icon && (
        <div className="mb-4 flex justify-center">
          <Image
            src={`/icons/game-icons/${area.icon}.svg`}
            alt={area.name}
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-primary mb-2">{area.name}</h3>
      <p className="text-text-muted">{area.description}</p>
    </div>
  );
}
