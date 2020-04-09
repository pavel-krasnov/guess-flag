const getRandomNumber = upToExclusive => Math.floor(Math.random() * upToExclusive);

const getRandomCountries = (count, countries) => {
    const result = [];
    for (let i = 0; i < count; ) {
        const randomCountry = countries[getRandomNumber(countries.length)];
        if (!result.includes(randomCountry)) {
            result.push(randomCountry);
            i++;
        }
    }
    return result;
}

export const getCurrentCountryAndAnswers = (count, countries) => {
    const answers = getRandomCountries(count, countries);
    const currentCountry = answers[getRandomNumber(answers.length)];
    return {answers, currentCountry};
}