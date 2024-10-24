// Tâche 02: Attendre un appel
async function awaitCall() {
    const mockAPI = () => new Promise(resolve => setTimeout(() => resolve('Données de l\'API'), 2000));

    const data = await mockAPI();
    console.log(data);
}

awaitCall();