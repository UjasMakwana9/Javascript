function*  generator()
{
    yield 1;
    yield 2;
    yield 3;

}

let gen = generator();
let gen2 = generator();

console.log("gen 1:",gen.next().value);
console.log("gen 2:",gen2.next().value);
console.log("gen 1:",gen.next().value);
console.log("gen 2:",gen2.next().value);
    console.log("gen 1:",gen.next().value);
    console.log("gen 2:",gen2.next().value);
    console.log("gen 1:",gen.next().value);
    console.log("gen 2:",gen2.next().value);