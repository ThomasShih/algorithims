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
    sortedArray = []
    while(randomArray!=undefined&&randomArray.length!=0){
        randomArray = heapify(randomArray,0)

        //heap is built, now swap the first and last element
        randomArray = swapPositon(randomArray,0,randomArray.length-1)
        //remove the last element as it is the max
        var lastElement = randomArray.pop()
        sortedArray.push(lastElement)
    }

    //reverse the array
    return sortedArray.reverse()
}

if (require.main === module) {
    var randomArray = [...Array(100)].map(() => Math.floor(Math.random() * 100));
    console.log("Input of " + String(randomArray))
    result = heapSort(randomArray);
    console.log("Output of " + String(result))
}