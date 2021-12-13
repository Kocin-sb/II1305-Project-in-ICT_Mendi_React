
import fire from "./firebase";

const data =() => {
const duration = new Array()
let totalEnergy = new Array()
let longestFlow = new Array()
let highestIncrease = new Array()
const userCollection = fire.firestore().collection("kCsBAiT2IiQRuE8lmHd6fkiOkl22")

 userCollection.get().then((snapshot) =>{
    snapshot.docs.forEach((doc)=>{
         duration.push(doc.data().duration)
         totalEnergy.push(doc.data().totalEnergy)
         longestFlow.push(doc.data().longestFlow)
        highestIncrease.push(doc.data().highestIncrease)
    })

 })
 console.log(duration + "duration");
 console.log(longestFlow + "longestflow");

 return {d : duration,
    lg : longestFlow,
    te : totalEnergy,
    hi : highestIncrease
    }
}
// export default arryData
export default
    data
