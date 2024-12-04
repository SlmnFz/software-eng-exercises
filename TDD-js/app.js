const StringCalculator = require("./StringCalculator")


const main = () => {
    const instance = new StringCalculator()
    let test1 = instance.AddV5("//;\n 1 ; 2 ; 3 ");
    let test21 = instance.AddV5("//;\n 1 ; 2 ; 3 ");
    let test2 = instance.AddV5("//;\n 1 ; 2 ; 3 ");
    let tes = instance.AddV5("//;\n 1 ; 2 ; 3 ");
    let test = instance.AddV5("//;\n 1 ; 2 ; 3 ");
    let c = instance.GetCalledCount()
    console.log(c);
}

main()