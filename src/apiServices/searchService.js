import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get(`8a3fe9bc-a4fa-4989-98eb-2ad65d35ecea`, {
            params: {
                //...
            },
        });

        return res.data
    } catch (error) {
        console.log(error);
    }
};