"use strict";
const apibaseUrl = "https://amvstrm-api-olive.vercel.app/api/v2/";

const fetchDataFromServer = async function (url) {
    let data = await (await fetch(`${apibaseUrl}${url}`)).json();
    return data;
};

export {
    fetchDataFromServer
};