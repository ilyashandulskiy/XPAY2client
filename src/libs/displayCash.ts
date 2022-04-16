import lang from "libs/lang";

const displayCash = (cash: number, withPlus?: boolean) => {

    let prefix = '';
    if (withPlus && cash > 0) prefix = '+'

    return prefix + cash.toLocaleString(lang.CURRENCY.LOCALE) + ' ' + lang.CURRENCY.SIGN

}

export default displayCash