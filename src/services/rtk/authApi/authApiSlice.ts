import { api } from '../api';
import loginApiService from './loginApiService';
import getUserDetail from './getUserDetail';


export const userApi = api.injectEndpoints({
  endpoints: build => ({
    login: loginApiService(build),
    getLoginUserDetail:getUserDetail(build)

}),
overrideExisting: true,
});

export const {useLoginMutation,useGetLoginUserDetailQuery} = userApi;















