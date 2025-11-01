function Mentor() {
  const logoUrls = [
    "https://d3fu8elvld6rb5.cloudfront.net/kagr.club/img/kagr/logo/baincapital-logo.svg",
    "https://d3fu8elvld6rb5.cloudfront.net/kagr.club/img/kagr/logo/Goldman-Sachs-Logo-PNG-Picture.png",
    "https://d3fu8elvld6rb5.cloudfront.net/kagr.club/img/kagr/logo/antler-logo.png",
    "https://d3fu8elvld6rb5.cloudfront.net/kagr.club/img/kagr/logo/antler-logo.png",
    "https://d3fu8elvld6rb5.cloudfront.net/kagr.club/img/kagr/logo/antler-logo.png",
    "https://d3fu8elvld6rb5.cloudfront.net/kagr.club/img/kagr/logo/antler-logo.png",
  ];

  return (
    <div className="mx-auto max-w-4xl min-w-full space-y-8 text-center select-none">
      <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
        Our{" "}
        <span className="text-gray-800 dark:text-white">
          Faculty and Mentor
        </span>{" "}
        Affiliations
      </p>
      <div className="flex flex-row flex-wrap justify-between gap-8">
        {logoUrls.map((url, index) => (
          <div
            key={index}
            className="flex flex-auto items-center justify-center transition-all hover:scale-110"
          >
            <img
              src={url}
              width={115}
              className="opacity-40 invert transition-all hover:opacity-100 dark:invert-0"
              alt="mentor images"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentor;
