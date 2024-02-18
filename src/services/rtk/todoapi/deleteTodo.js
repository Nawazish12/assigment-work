import { SuccessToast } from "../../../common/SuccessToast";
import { ErrorToast } from "../../../common/ErrorToast";

export default (build) =>
  build.mutation({
    query: (payload) => ({
      url: `/todos/${payload.id}`,
      method: "DELETE",
    }),
    async onQueryStarted(arg, { queryFulfilled }) {
      try {
        const response = await queryFulfilled;
        if (response.meta.response.status == 200 || response.meta.response.ok) {
          return SuccessToast("Todo delete successfully!");
        }
      } catch (err) {
        return ErrorToast(err?.error?.error);
      }
    },
  });
