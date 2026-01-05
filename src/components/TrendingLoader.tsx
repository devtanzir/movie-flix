const TrendingLoader = () => {
  return (
    <>
      <ul className="animate-pulse">
        {[1, 2, 3, 4, 5].map((item) => (
          <LoaderBody index={item} />
        ))}
      </ul>
    </>
  );
};

export default TrendingLoader;

const LoaderBody = ({ index }: { index: number }) => {
  return (
    <>
      <li>
        <p>{index}</p>
        <div className="w-[127px] h-[163px] rounded-lg object-cover -ml-3.5 bg-slate-400" />
      </li>
    </>
  );
};
