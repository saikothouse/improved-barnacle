import axios from 'axios';

const BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1';

export const fetchEditions = async () => {
    const response = await axios.get(`${BASE_URL}/editions.json`);
    return response.data;
};

export const fetchQuranTranslation = async (edition) => {
    const response = await axios.get(`${BASE_URL}/editions/${edition}.json`);
    return response.data;
};

export const fetchAudio = async (chapter) => {
    const response = await axios.get(`${BASE_URL}/editions/ben-muhiuddinkhan/${chapter}.json`);
    return response.data;
};
