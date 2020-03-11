export const addFeature = item => {
    console.log ('feature is invoked');
    return { type: 'ADD_FEATURE', payload: item };
};

export const removerFeature = item => {
    console.log ('remove feature is invoke');
    return { type: 'REMOVE_FEATURE', payload: item }
};