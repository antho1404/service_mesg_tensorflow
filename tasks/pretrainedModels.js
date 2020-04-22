const mobilenet = require('@tensorflow-models/mobilenet');

async function mobilenet_classify(inputs){

    if(!inputs.image){
        throw new Error('invalid inputs')
    }
    const model = await mobilenet.load();
    const predictions = await model.classify(inputs.image);
    
    return {
      succesfull: true,
      result : predictions
    }

}

export {
    mobilenet_classify
}