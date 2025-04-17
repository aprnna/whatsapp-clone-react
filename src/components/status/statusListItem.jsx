import { showFormattedDateWithTime } from "../../utils/timeStamp";

export default function StatusListItem({ data, onClick }) {
  return (
    <div
      className="flex gap-2 items-center p-2 px-4 hover:bg-background-surface cursor-pointer"
      onClick={onClick}
    >
      <div className="p-0.5 bg-gradient-to-br from-cyan-400 to-green-400 size-12 rounded-full flex-none">
        <img
          src={data?.picture}
          alt={data?.name}
          className="rounded-full border-2 border-white"
        />
      </div>
      <div className="flex justify-between border-b-2 border-background-base w-full p-2">
        <div>
          <h2 className="font-bold">{data?.name}</h2>
          <p className="text-text-secondary">
            {showFormattedDateWithTime(
              data?.stories[data.stories.length - 1].time
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
