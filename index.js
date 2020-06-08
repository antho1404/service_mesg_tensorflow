const Service = require('@liteflow/service')
const pretrainedModels = require('./tasks/pretrainedModels')
// tf.loadGraphModel("https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v1_050_160/classification/1/default/1", { fromTFHub: true })
const liteflow = new Service()
// const readImage = path => {
//   const imageBuffer = fs.readFileSync(path);
//   const tfimage = tfnode.node.decodeImage(imageBuffer);
//   return tfimage;
// }
// загрузить модель
async function main(){

  liteflow.listenTask({
    predict: require('./tasks/predict'),
    mobilenet_classify : pretrainedModels.mobilenet_classify,
  })
  .on('error', (error) => console.error(error))
  
  liteflow.emitEvent('started', { x: true })
    .catch((error) => console.error(error))
}

main()
