import {readFile} from "node:fs/promises"

const filePath = process.argv[2]
const findWord = process.argv[3]

const fileData = await readFile(filePath,"utf-8")
const wordArray = fileData.split(/[\W]/).filter((w) => w)
//console.log(wordArray)
const wordCount = {}

wordArray.forEach((word)=>{
    
    if(word.toLocaleLowerCase() in wordCount){
        wordCount[word.toLocaleLowerCase()] += 1
    }else{
        wordCount[word.toLocaleLowerCase()] = 1
    }
})
console.log(wordCount)
const cons = " Occur "+ (wordCount[findWord] ?? 0) +" times in "+filePath
console.log(findWord?cons : wordCount)