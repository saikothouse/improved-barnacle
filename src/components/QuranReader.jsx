import React, { useEffect, useState } from 'react';
import { fetchQuranTranslation } from '../api';

const QuranReader = ({ edition }) => {
    const [quranText, setQuranText] = useState('');

    useEffect(() => {
        const getTranslation = async () => {
            const data = await fetchQuranTranslation(edition);
            setQuranText(data.data);
        };
        getTranslation();
    }, [edition]);

    return (
        <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">Quran Translation</h2>
            <pre className="whitespace-pre-wrap">{quranText}</pre>
        </div>
    );
};

export default QuranReader;
