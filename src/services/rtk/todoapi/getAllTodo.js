export default (build) =>
  build.query({
    query: () => ({
      url: `todos?limit=7&skip=0`,
      method: "GET",
    }),
    providesTags: ["getAllTodos"],
  });
