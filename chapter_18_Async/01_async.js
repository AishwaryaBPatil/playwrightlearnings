async function demo() {
    try {
        let res = await Promise.reject("503 reject");
    } catch (error) {
        console.log("error message", error);
    }
    finally {
        console.log("always");
    }
}

demo();
