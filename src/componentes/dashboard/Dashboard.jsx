import React, { useEffect, useState } from 'react';
import { getUser } from './DashboardController';
import { useSelector } from 'react-redux';

export default function Dashboard() {

    const user = useSelector(state => state.userReducer.user);

    return (
        <>
            <h1>{ user.name }</h1>
        </>
    );
}