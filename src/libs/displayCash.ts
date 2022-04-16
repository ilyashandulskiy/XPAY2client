
const displayCash = (cash: number, withPlus?: boolean) => {

    let prefix = '';
    if (withPlus && cash > 0) prefix = '+'

    return prefix + cash.toLocaleString('RU') + ' ₽'

}

export default displayCash