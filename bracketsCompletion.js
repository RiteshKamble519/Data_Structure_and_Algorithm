let bracketPair = {
    '[': ']',
    '(': ')',
    '{': '}',
    '<': '>'
}

validStack = ['[', '[', '{', '}', ']', '(', ')', ']'];
inValidStack = ['[', '[', '{', '}', ']', ')', ')', ']'];
testStack = validStack;
finalStack = [];
console.log("Brackets String: " + testStack + " Length : " + testStack.length);

for (let i = 0; i < testStack.length; i++) {
    let closingBracket = ''
    finalStack.push(testStack[i]);
    console.log("Current Brackets : ", finalStack);
    closingBracket = bracketPair[finalStack[finalStack.length - 2]];

    if (testStack[i] == closingBracket) {
        console.log("Removing1 " + finalStack.pop());
        console.log("Removing2 " + finalStack.pop());
    }

    console.log("finalStack ", finalStack)
}

if (finalStack.length === 0) {
    console.log("Balanced string");
}
else {
    console.log("Non-Balanced string");
}