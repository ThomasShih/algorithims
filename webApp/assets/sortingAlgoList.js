const sortingAlgoList = [
    {
        id:"bubbleSort",
        name:"Bubble Sort",
    },
    {
        id:"heapSort",
        name:"Heap Sort",
    },
    {
        id:"insertionSort",
        name:"Insertion Sort",
    },
    {
        id:"countingSort",
        name:"Counting Sort",
    },
    {
        id:"mergeSort",
        name:"Merge Sort",
    },
    // {
    //     id:"quickSort",
    //     name:"Quick Sort",
    // },
    // {
    //     id:"radixSort",
    //     name:"Radix Sort",
    // },
    // {
    //     id:"selectionSort",
    //     name:"Selection Sort",
    // },
]

//for bubbleSort
function swapWithNext(inputArray,indexLoc){
    let firstItem = inputArray[indexLoc]
    inputArray[indexLoc] = inputArray[indexLoc+1]
    inputArray[indexLoc+1] = firstItem
    return inputArray
}

function bubbleSort(randomArray) {
    let returnArraySteps = []
    do{
        var finishPassing = true
        for(var i = 0;i < randomArray.length;i++){
            if(randomArray[i] > randomArray[i+1]){
                randomArray = [...swapWithNext(randomArray,i)]
                returnArraySteps.push(randomArray)
                finishPassing = false
            }
        }
    }while(finishPassing == false)

    return returnArraySteps
}

function countingSort(randomArray){
    let returnArraySteps = []
    //get the max value
    const max = Math.max.apply(null,randomArray)
    var countArray = new Array(max+1).fill(0)

    //fill out counts
    for(var i = 0;i<randomArray.length;i++){
        countArray[randomArray[i]] = countArray[randomArray[i]] + 1
    }

    //create cumulative counts
    for(var i = 0;i<max;i++){
        countArray[i+1] = countArray[i+1] + countArray[i]
    }

    var sortedArray = Array(randomArray.length).fill(0)
    //place in sorted array and decrement
    for(var i = randomArray.length - 1;i > -1;i--){
        var value = randomArray[i]
        sortedArray[countArray[value]-1] = value
        countArray[value] = countArray[value] -1
        returnArraySteps.push([...sortedArray])
    }

    return returnArraySteps
}

//for heapSort
const returnChildren = (node) => {return [node*2+1,node*2+2]}

function swapPositon(inputArray,pos1,pos2){
    const tempVariable = inputArray[pos1]
    inputArray[pos1] = inputArray[pos2]
    inputArray[pos2] = tempVariable
    return inputArray
}

function heapify(randomArray,node){
    const nodeChildren = returnChildren(node)
    do{
        var lastLoop = true
        //if the node is smaller than the children nodes, swap
        if(randomArray[node]<randomArray[nodeChildren[1]]){
            //try the right child
            randomArray = swapPositon(randomArray,node,nodeChildren[1])
            lastLoop = false
        }

        if(randomArray[node]<randomArray[nodeChildren[0]]){
            //try the left child
            randomArray = swapPositon(randomArray,node,nodeChildren[0])
            lastLoop = false
        }

        //call heapify on the childs
        if(randomArray[nodeChildren[0]]!=undefined){
            randomArray = heapify(randomArray,nodeChildren[0])
        }
        if(randomArray[nodeChildren[1]]!=undefined){
            randomArray = heapify(randomArray,nodeChildren[1])
        }
    }while(lastLoop==false)
    return randomArray
}

function heapSort(randomArray){
    var sortedArray = []
    var returnArray = []
    while(randomArray!=undefined&&randomArray.length!=0){
        randomArray = heapify(randomArray,0)

        //heap is built, now swap the first and last element
        randomArray = swapPositon(randomArray,0,randomArray.length-1)
        //remove the last element as it is the max
        var lastElement = randomArray.pop()
        sortedArray.push(lastElement)
        returnArray.push([...randomArray.concat(sortedArray).reverse()])
    }
    //reverse the array
    return returnArray
}

//for insertionSort
function insert(inputArray,number){
    //everything to the left should be sorted
    for (var i = 0; i < inputArray.length;i++){
        if(number <= inputArray[i]){
            inputArray.splice(i,0,number)
            return inputArray
        }
    }
}

function insertionSort(randomArray) {
    let returnArraySteps = []
    for(var i = 1;i < randomArray.length;i++){
        if(randomArray[i-1] > randomArray[i]){
            var insertionValue = randomArray.splice(i,1)[0]
            randomArray = [...insert(randomArray,insertionValue)]
            returnArraySteps.push(randomArray)
        }
    }
    return returnArraySteps
}

//for mergeSort
var mergeSortSteps = []
var initialArrayLength = []
function merge(firstHalf,secondHalf){
    var mergedArray = []

    // while there is still numbers to merge
    do{
        //check to see if either array is empty, if so, then we know the remaining values are just the other array
        if(firstHalf === undefined || firstHalf.length == 0){
            mergedArray = mergedArray.concat(secondHalf)
            break
        }else if(secondHalf === undefined || secondHalf.length == 0){
            mergedArray = mergedArray.concat(firstHalf)
            break
        }

        //Check to see which array starts with a smaller value and append it into the new array
        if(firstHalf[0]<secondHalf[0]){
            let appendValue = firstHalf.shift()
            mergedArray.push(appendValue)
        }else{
            let appendValue = secondHalf.shift()
            mergedArray.push(appendValue)
        }

    }while(firstHalf.length + secondHalf.length > 0)

    return mergedArray
}

function mergeSort(randomArray) {
    if (randomArray.length > 1){//keep splitting until size 1
        let midpoint = Math.round(randomArray.length/2) //Get the midpoint, if uneven, get the rounded up midpoint
        //if not sorted
        const firstHalf = mergeSort(randomArray.splice(0,midpoint))
        const secondHalf = mergeSort(randomArray)

        randomArray = merge(firstHalf,secondHalf)

        if(randomArray.length > 2){
            mergeSortSteps.push([...randomArray.concat(Array(initialArrayLength - randomArray.length).fill(0))])
        }
    }

    return randomArray
}

function mergeSortHandler(randomArray){
    initialArrayLength = randomArray.length
    mergeSort(randomArray)
    return mergeSortSteps
}
export {sortingAlgoList,bubbleSort,countingSort,heapSort,insertionSort,mergeSortHandler}