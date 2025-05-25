export const Emoji = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-[72px] mb-6">
        <div className="w-9 h-9 bg-blue-800 rounded-full"></div>
        <div className="w-9 h-9 bg-blue-800 rounded-full"></div>
      </div>
      <svg
        width="180"
        height="60"
        viewBox="0 0 150 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 15 C45 45, 105 45, 135 15"
          stroke="#003DA5"
          strokeWidth="19.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
