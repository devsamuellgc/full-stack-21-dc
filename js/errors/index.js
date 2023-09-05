async function newAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (response.status === 404) {
            throw new Error('Page not found');
        } else if (response.status === 500) {
            throw new Error('Server error');
        } else if (!response.ok) {
            throw new Error(`HTTP error personalizado! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.slip.advice);
        return data.slip.advice;
    } catch (error) {
        console.error(error);
    }
}


async function getCharacter() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}
