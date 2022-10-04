import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import JobItem from "./components/JobItem";
import { data } from "./data";

function App() {
  const [filters, setFilters] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  });

  const handledFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  }; //removes filters from list

  const clearFilters = () => {
    setFilters([]); //empty state
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return; //prevent having the same flters
    setFilters([...filters, tag]);
  }; //adds filters to container

  const filteredJobs = jobs.filter((item) =>
    filters.every(
      (filter) =>
        item.languages.includes(filter) ||
        item.tools.includes(filter) ||
        item.role === filter ||
        item.level === filter
    )
  ); //filter through tags

  return (
    <div>
      <Header />
      <Filter
        filters={filters}
        handleFilter={handledFilterClick}
        handleClear={clearFilters}
      />
      <div className="mt-20 flex flex-col gap-20 md:gap-5">
        {filteredJobs.map((job) => (
          <JobItem job={job} key={job.id} handleTagClick={handleTagClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
