// Tâche 01: Itérer avec Async/Await

async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attente de 1 seconde
    }
}

const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

// Tâche 02: Attendre un appel
async function awaitCall() {
    const mockAPI = () => new Promise(resolve => setTimeout(() => resolve('Données de l\'API'), 2000));

    const data = await mockAPI();
    console.log(data);
}

awaitCall();




