// Tâche 03: Gérer les erreurs avec Async/Await

async function awaitCall() {
    const mockAPI = () => new Promise((resolve, reject) => setTimeout(() => reject('Échec de l\'API'), 2000));

    try {
        const data = await mockAPI();
        console.log(data);
    } catch (error) {
        console.error('Erreur: ', error);
    }
}
awaitCall();