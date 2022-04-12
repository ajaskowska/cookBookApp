import React from 'react';
import Entrance from "../components/Entrance";
import SearchForm from "../components/SearchForm";
import Popular from "../components/Popular";
import Diet from "../components/Diet";
import Header from "../components/Header";
import Category from '../components/Category'
function Home() {
    return (
        <>
            <Popular/>
            <Diet/>
        </>
    );
}

export default Home;