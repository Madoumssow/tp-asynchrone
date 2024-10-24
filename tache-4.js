// Tâche 04: Chaîner Async/Await

async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Fonction 1 terminée');
}

async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Fonction 2 terminée');
}

async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Fonction 3 terminée');
}

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

chainedAsyncFunctions();