function Filter(props) {
  return (
    <div>
      {props.filters.length > 0 && (
        <div className="container flex items-center justify-between px-10 bg-white shadow-md h-20 mt-[-35px] cursor-pointer">
          <div className="flex gap-7">
            {props.filters.length > 0 &&
              props.filters.map((filter) => (
                <>
                  <div
                    key={filter}
                    className="flex cursor-pointer"
                    onClick={() => props.handleFilter(filter)}
                  >
                    <div className="bg-background text-header flex items-center gap-1 px-2 py-1 font-bold rounded-sm">
                      {filter}
                    </div>
                    <div className="bg-header h-10 w-10 flex items-center justify-center hover:bg-veryDarkCyan cursor-pointer">
                      <img src="/images/icon-remove.svg" alt="remove-icon" />
                    </div>
                  </div>
                </>
              ))}
          </div>
          <p
            className="text-darkCyan hover:text-header hover:underline cursor-pointer"
            onClick={props.handleClear}
          >
            Clear
          </p>
        </div>
      )}
    </div>
  );
}

export default Filter;
