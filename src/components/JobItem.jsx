function JobItem(props) {
  const { logo, company, news, featured, position, postedAt, contract, location, role, level, languages, tools } = props.job;
  return (
      <div className={`w-[90%] mx-auto sm:container h-fit flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 md:gap-0 bg-white md:h-40 lg:h-32 shadow-md rounded-md px-5 pb-6 md:pb-0 md:px-10 md:pt-5 lg:pt-0 ${news && featured && "border-l-4 border-header"}`}>
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 pb-3 md:pb-0 border-b border-gray-300 md:border-0">
        <div className="flex md:self-center mt-[-35px] md:mt-0">
          <img src={logo} alt="company logo" />
        </div>
        <div className="flex flex-col gap-2 md:gap-1">
          <div className=" flex items-center gap-4">
            <h2 className="text-header font-semibold text-lg">
              {company}
            </h2>
            <div className="flex gap-2">
              {news && (
                <div className="bg-header text-white rounded-full px-2 pt-1 h-6">
                  NEW!
                </div>
              )}
              {featured && (
                <h3 className="bg-veryDarkCyan rounded-full text-white px-2 pt-1 h-6">
                  FEATURED
                </h3>
              )}
            </div>
          </div>
          <h2 className="font-bold text-xl md:text-2xl text-veryDarkCyan hover:text-header cursor-pointer">
            {position}
          </h2>
          <div className="flex gap-5 text-darkCyan text-md">
            <p>{postedAt}</p>
            <p>.</p>
            <p>{contract}</p>
            <p>.</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap">
        <div className="bg-background text-header px-2 py-1 font-bold rounded-sm hover:bg-header hover:text-white cursor-pointer" onClick={() => props.handleTagClick(role)}>
          {role}
        </div>
        <div className="bg-background text-header px-2 py-1 font-bold rounded-sm hover:bg-header hover:text-white cursor-pointer" onClick={() => props.handleTagClick(level)}>
          {level}
        </div>
        {languages &&
          languages.map((language) => (
            <div key={language} className="bg-background text-header px-2 py-1 font-bold rounded-sm hover:bg-header hover:text-white cursor-pointer" onClick={() => props.handleTagClick(language)}>
              {language}
            </div>
          ))}
        {tools &&
          tools.map((tool) => (
            <div key={tool} className="bg-background text-header px-2 py-1 font-bold rounded-sm hover:bg-header hover:text-white cursor-pointer" onClick={() => props.handleTagClick(tool)}>
              {tool}
            </div>
          ))}
      </div>
    </div>
  );
}

export default JobItem;
