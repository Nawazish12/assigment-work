export default (build) =>
  build.query({
    query: () => ({
      url: 'auth/me',
      method: 'GET',
    }),
    providesTags: ['currentUser'],
     
  });