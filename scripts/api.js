"use strict";
const apibaseUrl = "https://amvstrm-api-olive.vercel.app/api/v2/";
const apibaseUrlV1 = "https://amvstrm-api-olive.vercel.app/api/v1";
const apibaseUrl2 = "https://dev-amvstrm-api.nyt92.eu.org/api/v2/";
const apibaseUrl2V1 = "https://dev-amvstrm-api.nyt92.eu.org/api/v1";

const fetchDataFromServer = async function (url) {
    let data = ""
    try {
        data = await (await fetch(`${apibaseUrl}${url}`)).json();
    } catch (error) {
        try {
            data = await (await fetch(`${apibaseUrl2}${url}`)).json();
        } catch (error) {
            console.log(error)
        }
    } 
    
    return data;
};

const fetchDataFromServerV1 = async function (url) {
    let data = ""
    try {
        data = await (await fetch(`${apibaseUrlV1}${url}`)).json();
    } catch (error) {
        try {
            data = await (await fetch(`${apibaseUrl2V1}${url}`)).json();
        } catch (error) {
            console.log(error)
        }
    } 
    
    return data;
}

export {
    fetchDataFromServer,
    fetchDataFromServerV1
};