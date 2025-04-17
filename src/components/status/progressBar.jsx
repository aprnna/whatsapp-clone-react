export default function ProgressBar({ progress }) {
  return (
    <div className="h-1 flex-1 bg-white/30 rounded-full">
      <div className="h-full bg-white rounded-full transition-all duration-50" />
    </div>
  );
}
