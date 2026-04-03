export default function SkeletonCards({ count = 3 }) {
  return (
    <div className="skeleton-stack" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-card" key={`skeleton-${index}`}>
          <div className="skeleton-line skeleton-line-short" />
          <div className="skeleton-line" />
          <div className="skeleton-line skeleton-line-muted" />
        </div>
      ))}
    </div>
  );
}
