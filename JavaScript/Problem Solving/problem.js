function cashOut(money) {
    if (typeof money !== "number" || money < 0) {
        return "Invalid";
    }
    const charge = money * 1.75 / 100;
    return charge;
}

function validEmail(email) {
    if (typeof email !== "string") {
        return "Invalid";
    }
    if (email.charAt(0) !== "." && email.charAt(0) !== "-" && email.charAt(0) !== "_" && email.charAt(0) !== "+" && email.charAt(0) !== "@") {
        if (email.includes(".com") && email.includes("@") && !email.includes(" ") && email.endsWith(".com")) {
            return true;
        }
    }
    return false;
}


function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }
    if (votes.length == 0) {
        return "Draw";
    }
    let mangoParty = 0;
    let bananaParty = 0;
    for (const party of votes) {
        if (party === "mango" || party === "Mango") {
            mangoParty++;
        } else if (party === "banana" || party === "Banana") {
            bananaParty++;
        }
    }
    if (mangoParty > bananaParty) {
        return "Mango";
    } else if (bananaParty > mangoParty) {
        return "Banana";
    } else if (mangoParty == bananaParty) {
        return "Draw";
    }
    else {
        return "Draw";
    }
}

function isBestFriend(f1, f2) {
    if (typeof f1 !== "object" || typeof f2 !== "object") {
        return "Invalid";
    } else if (Array.isArray(f1) && Array.isArray(f2)) {
        return "Invalid";
    }
    if (typeof f1.name !== "string" || typeof f1.roll !== "number" || typeof f1.bestFriend !== "number" || typeof f2.name !== "string" || typeof f2.roll !== "number" || typeof f2.bestFriend !== "number") {
        return "Invalid";
    }
    if (f1.roll === f2.bestFriend && f2.roll === f1.bestFriend) {
        return true
    } else {
        return false;
    }
}

function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    for (let i = 0; i < times.length; i++) {
        if ( typeof times[i] !== "number" ) {
            return "Invalid";
        }
    }
    let totalTimes = 0;
    for (const time of times) {
        totalTimes = totalTimes + time;
    }
    const minute = Math.floor(totalTimes / 60);
    const remainingMint = Math.floor(minute % 60);
    const RemeiningSecond = Math.floor(totalTimes % 60);
    const hour = Math.floor(minute / 60);
    return {
        hour: hour,
        minute: remainingMint,
        second: RemeiningSecond
    };
}

function validEmail(email) {
    if (typeof email !== "string") {
        return "Invalid";
    }
    const firstLatter = email.charAt(0);
    if (![".", "-","_","*", "+", "@"].includes(firstLatter) && email.includes(".com") && email.includes("@") && !email.includes(" ") && email.endsWith(".com")) {
        return true;
    }else {
        return false
    }
}
