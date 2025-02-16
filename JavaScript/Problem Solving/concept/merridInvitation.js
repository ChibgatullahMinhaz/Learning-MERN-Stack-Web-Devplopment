const relatives = [
    { name: "Alice", member: 1 },
    { name: "Bob", member: 2 },
    { name: "Charlie", member: 3 },
    { name: "Alice", member: 1 },
    { name: "David", member: 4 },
    { name: "Eve", member: 5 },
    { name: "Bob", member: 2 },
    { name: "Frank", member: 6 },
    { name: "Grace", member: 7 },
    { name: "Alice", member: 1 }
];
function DawahList(ShadiList) {
    if ( !Array.isArray(ShadiList)) {
        return "invalid Input";
    }
    let uniqeList = [];
    let totalMember = 0;
    for (const list of ShadiList) {
        let isUnique = true;
        for (const newRelative of uniqeList) {
            if (list.name === newRelative.name && list.member === newRelative.member) {
                isUnique = false;
                console.log(newRelative)
            }
        }
        if (isUnique) {
            uniqeList.push(list)
            totalMember += list.member;
        }
    }
    // return [uniqeList , totalMember];
}
const output = DawahList(relatives);
console.log(output);