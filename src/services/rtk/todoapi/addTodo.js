import {SuccessToast} from "../../../common/SuccessToast";
import {ErrorToast} from "../../../common/ErrorToast";
 

export default (build) =>
  build.mutation({
    query: (payload) => ({
      url: "todos/add",
      method: "POST",

      body: payload,
    }),
    invalidatesTags: ["getAllTodos"],
    async onQueryStarted(arg, { queryFulfilled }) {
      try {
        const response = await queryFulfilled;
        if (response.meta.response.status == 200 || response.meta.response.ok) {
          return SuccessToast("Todo Successfully Added");
        }
      } catch (err) {
        return ErrorToast(err?.error?.error);
      }
    },
  });
