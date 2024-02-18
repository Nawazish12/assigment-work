
export default build =>
  build.mutation({
    query: payload => ({
      url: 'auth/login',
      method: 'POST',
      body: payload,
    }),
   
  });