import { useGetUserQuery } from '@/features/users/usersApi';
import React from 'react';

const Footer = () => {
    const {data, isLoading} = useGetUserQuery()
    console.log(data);
    return (
        <section>
            {
                data?.map(item => <h1 key={item?.id}>{item?.name}</h1>)
            }
        </section>
    );
};

export default Footer;