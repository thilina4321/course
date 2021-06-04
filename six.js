const array1 = [1,22,13,4]
const array2 = [4,1,99]

const arr = array1.concat(array2)

let isOk = true

while (isOk) {
    isOk = false
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            isOk = true
        }
        
    }
}

console.log(arr);